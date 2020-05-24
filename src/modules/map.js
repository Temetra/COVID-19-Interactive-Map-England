// Leaflet manipulation module for Map.svelte
import Legend from "~/mapping/Legend.svelte";

// Settings
const center = { lat: 52.914639, lon: -1.47189 }
const zoom = 7;
const focusZoom = 9;
const showTiles = true;

// Variables
let map, legend, tileLayer, geoLayer;

// Map initialisation
export async function createMap(mapElement) {
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

	// Create legend
	let leafletLegend = L.control({position: "topright"});
	leafletLegend.onAdd = () => L.DomUtil.create("div", "info legend");
	leafletLegend.addTo(map);
	legend = new Legend({ target: leafletLegend._container });
}

// Add GeoJson to map
export function addGeoData(geoData) {
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

// Update GeoJson layer
export function updateGeoLayer(mapLookupFunc, focusDayIndex) {
	// Check state
	if (geoLayer == null || focusDayIndex == -1) return;

	// Update all geojson features
	for (let layer of Object.values(geoLayer._layers)) {
		let code = layer.feature.properties.ctyua19cd;
		let data = mapLookupFunc(code, focusDayIndex);

		// Update SVG attributes
		layer._path.setAttribute("fill-opacity", 1.0);
		layer._path.setAttribute("class", "leaflet-interactive " + data.style);

		// Set case count for day
		layer.feature.properties.casesCount = data.raw;
		layer.feature.properties.casesCountPerPop = data.perPop;

		// Add merged authority name if different from feature name
		if (data && layer.feature.properties.ctyua19nm != data.name) {
			layer.feature.properties.mergedAuthority = data.name;
		}

		// Update popup
		if (layer.isPopupOpen()) {
			let popup = layer.getPopup();
			let content = createPopupContent(layer);
			popup.setContent(content);
		}
	}
}

// Zoom on a region, or reset view
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
		}
	} else {
		// Reset map if focused region is cleared
		map.closePopup();
		map.setView(center, zoom, { animate: true });
	}
}

function createPopupContent(layer) {
	// Get data from layer
	let authority = layer.feature.properties.mergedAuthority || layer.feature.properties.ctyua19nm;
	let count = layer.feature.properties.casesCount;
	let perPop = layer.feature.properties.casesCountPerPop;

	// Create content
	if (count == null) {
		return `
		<span>${authority}</span>
		<br/>No data
		`;
	}
	else {
		return `
		<span>${authority}</span>
		<br/>${count.toLocaleString()} case${count == 1 ? "" : "s"}
		<br/>${+perPop.toFixed(2)} per 10,000 people
		`;
	}
}

function showFeaturePopup(latlng, layer) {
	let content = createPopupContent(layer);
	layer.bindPopup(content, { className:"region-popup", closeOnClick:false }).addTo(map);
	layer.openPopup(latlng);
}
