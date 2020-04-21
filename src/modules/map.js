// Leaflet manipulation module for Map.svelte
import { geoData, focusRegion, maxCasesForDataset, geoLayerSource } from "../stores/datastore.js";

// Settings
const center = { lat: 52.914639, lon: -1.47189 }
const zoom = 7;
const focusZoom = 9;
const showTiles = true;
const regionColors = [
	"region-unknown",
	"region-zero",
	"region-one",
	"region-two",
	"region-three",
	"region-four",
	"region-five",
];

// Variables
let map, legend, tileLayer, geoLayer;

// Add geodata to map
geoData.subscribe(data => addGeoLayer(data));

// Update legend
maxCasesForDataset.subscribe(maxCases => updateLegend(maxCases));

// Update geo layer
geoLayerSource.subscribe(([geoData, lookup, maxCases, focusDay]) => {
	updateGeoLayer(lookup, maxCases, focusDay);
});

// Pan and zoom if region selected
focusRegion.subscribe(region => updateMapFocus(region));

export function createMap(mapElement) {
	// Only create map once
	if (map != null) return;

	// Create map
	map = L.map(mapElement, {
		center,
		zoom
	});
		
	// Add custom style to overlay pane
	map.getPane("overlayPane").classList.add("blend-overlay-pane");
	
	// Create tile layer
	tileLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png'
	});

	// Dev option to avoid spamming service requests
	if (showTiles) tileLayer.addTo(map);
}

function addGeoLayer(geoData) {
	// Only create if map and data exist
	if (map == null || geoData == null) return;

	// Create geoJSON layer
	if (geoLayer) geoLayer.remove();
	geoLayer = L.geoJSON(geoData, {
		style: feature => {
			return { 
				fillOpacity:0.5,
				weight:0.0
			}
		},
		onEachFeature: (feature, layer) => {
			layer.on({
				click: (data) => showFeaturePopup(data.latlng, data.sourceTarget)
			});
		}
	});
	
	// Add to map
	geoLayer.addTo(map);
}

function updateGeoLayer(covidLookup, maxCasesForDataset, focusDayIndex) {
	if (geoLayer == null || maxCasesForDataset <= 0 || focusDayIndex == -1) return;

	// Divide maxCasesForDataset into series of n intervals
	// n = number of regionColors excluding "unknown" and "zero"
	let colorNumbers = generateColorIntervals(maxCasesForDataset);

	// Update all geojson features
	for (let layer of Object.values(geoLayer._layers)) {
		// Get data for feature
		let data = covidLookup[layer.feature.properties.ctyua19cd];
		let count = data ? data.Cases[focusDayIndex] : null;

		// Find regionColor css class by checking case count against intervals
		var idx = colorNumbers.findIndex(x => (count == null) || (count < x));
		var regionColor = idx > -1 ? regionColors[idx] : regionColors[regionColors.length-1];

		// Update SVG attributes
		layer._path.setAttribute("fill-opacity", 1.0);
		layer._path.setAttribute("class", "leaflet-interactive " + regionColor);

		// Set case count for day
		layer.feature.properties.casesCount = count;

		// Add merged authority name if different from feature name
		if (data && layer.feature.properties.ctyua19nm != data.Name) {
			layer.feature.properties.mergedAuthority = data.Name;
		}

		// Update popup
		if (layer.isPopupOpen()) {
			let popup = layer.getPopup();
			let content = createPopupContent(layer);
			popup.setContent(content);
		}
	}
}

function updateMapFocus(region) {
	if (map == null) return;

	if (region && region.length > 0) {
		// Find region in geojson layer
		let target = Object.values(geoLayer._layers)
			.find(element => region == element.feature.properties.ctyua19cd);

		// Scroll to target and show info popup
		if (target) {
			let latlng = L.latLng(target.feature.properties.lat, target.feature.properties.long);
			showFeaturePopup(latlng, target);
			map.setView(target.getCenter(), focusZoom, { animate: true });
			window.scrollTo(0, 0);
		}
	} else {
		// Reset map if focused region is cleared
		map.closePopup();
		map.setView(center, zoom, { animate: true });
		window.scrollTo(0, 0);
	}
}

function updateLegend(maxCasesForDataset) {
	if (map == null || maxCasesForDataset == null) return;

	// Remove existing legend
	if (legend) legend.remove();

	// Create control
	legend = L.control({position: "topright"});

	// Add content when added to map
	legend.onAdd = () => {
		let div = L.DomUtil.create("div", "info legend");
		
		for (let item of listRegionColors(maxCasesForDataset)) {
			div.innerHTML += `<div class="keyitem">
				<div class="color ${item.color}"><div></div></div>
				<div class="label">${item.label}</div>
			</div>`;
		}

		return div;
	};

	// Add to map
	legend.addTo(map);
}

function createPopupContent(layer) {
	// Get data from layer
	let authority = layer.feature.properties.mergedAuthority || layer.feature.properties.ctyua19nm;
	let count = layer.feature.properties.casesCount;

	// Create content
	return count == null ? `${authority}<br/>No data` : 
		`${authority}<br/>${count} case${count == 1 ? "" : "s"}`;
}

function showFeaturePopup(latlng, layer) {
	let content = createPopupContent(layer);
	layer.bindPopup(content, { className:"region-popup" }).addTo(map);
	layer.openPopup(latlng);
}

function generateColorIntervals(max) {
	const colors_arr = Array(regionColors.length-2);
	return [0, ...Array.from(colors_arr, (_, x) => Math.ceil(max/(regionColors.length-2)*x+1))];
}

function listRegionColors(max) {
	if (max == 0) return [];

	// Get range of starting values
	let starting = generateColorIntervals(max);
	
	// Create range of ending values
	let ending = starting.map(q => q - 1);
	ending.shift(); // remove first value
	ending.push(max); // add max to end

	// Create labels
	let labels = ["Unknown", ...starting.map((val, idx) => idx == 0 ? "0 cases" : `${val}-${ending[idx]} cases`)];

	// Create array of key/value objects
	return labels.map((label, idx) => {
		return { 
			label,
			color: regionColors[idx]
		};
	});
}
