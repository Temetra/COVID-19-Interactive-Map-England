// Leaflet manipulation module for Map.svelte

// Settings
const center = { lat: 52.914639, lon: -1.47189 }
const zoom = 7;
const focusZoom = 9;
const showTiles = true;

// Variables
var map, legend, tileLayer, geoLayer;

export function initialiseMap(geoData) {
	if (map != null || geoData == null) return;

	// Create map
	map = L.map("leaflet_ele", {
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

export function updateGeoLayer(maxCasesForDataset, covidLookup, focusDayIndex) {
	if (geoLayer == null) return;

	// Update all geojson features
	for (let layer of Object.values(geoLayer._layers)) {
		// Get data for feature
		let data = covidLookup[layer.feature.properties.ctyua19cd];
		let count = data ? data.Cases[focusDayIndex] : null;

		// Update SVG attributes and set casesCount
		layer._path.setAttribute("fill-opacity", 1.0);
		layer._path.setAttribute("class", "leaflet-interactive " + getRegionColour(count, maxCasesForDataset));

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

export function updateMapFocus(region) {
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

export function updateLegend(maxCasesForDataset) {
	if (map == null || maxCasesForDataset == null) {
		return null;
	}

	// Remove existing legend
	if (legend) legend.remove();

	// Create control
	legend = L.control({position: "topright"});

	// Add content when added to map
	legend.onAdd = () => {
		var div = L.DomUtil.create("div", "info legend");
		
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

const regionColors = [
	"region-unknown",
	"region-zero",
	"region-one",
	"region-two",
	"region-three",
	"region-four",
	"region-five",
];

const colors_arr = Array(regionColors.length-2);

function generateColorNumbers(max) {
	return [0, ...Array.from(colors_arr, (_, x) => Math.ceil(max/(regionColors.length-2)*x+1))];
}

function listRegionColors(max) {
	if (max == 0) return [];

	// Get range of starting values
	let starting = generateColorNumbers(max);
	
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

function getRegionColour(count, max) {
	// Default colour for a null case count
	if (count == null) return regionColors[0];

	// Generate range of n numbers, from 0 to max
	let nums = generateColorNumbers(max);

	// Find the first colour that fits the count
	for (let x = nums.length; x >= 0; x--) {
		if (count >= nums[x]) {
			// +1 to skip 'unknown' value
			return regionColors[x + 1];
		}
	}
}
