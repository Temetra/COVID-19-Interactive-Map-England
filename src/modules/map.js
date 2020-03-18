// Leaflet manipulation module for Map.svelte

// Settings
const center = { lat: 52.914639, lon: -1.47189 }
const zoom = 7;
const focusZoom = 9;
const showTiles = true;

// Variables
var map, legend, tileLayer, geoLayer;

export function initialiseMap() {
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
}

export function updateLegend(maxCasesForDataset) {
	if (legend) legend.remove();
	legend = createLegend(map, maxCasesForDataset);
}

export function updateGeoLayer(geoData, maxCasesForDataset, covidData, focusDayIndex) {
	if (geoLayer) geoLayer.remove();
	geoLayer = createGeoLayer(map, geoData, maxCasesForDataset, covidData, focusDayIndex);
}

export function updateMapFocus(region) {
	if (region != null) {
		let authority = getSingleAuthority(region);
		if (authority.length > 0) {
			for (let value of Object.values(geoLayer._layers)) {
				if (authority == value.feature.properties.ctyua19nm) {
					value.openPopup();
					map.setView(value.getCenter(), focusZoom, { animate: true });
					window.scrollTo(0, 0);
				}
			}
		} else {
			map.closePopup();
			map.setView(center, zoom, { animate: true });
			window.scrollTo(0, 0);
		}
	}
}

function getMergedAuthority(authority) {
	switch (authority) {
		case "Cornwall":
		case "Isles of Scilly":
			return "Cornwall and Isles of Scilly";
		case "Hackney":
		case "City of London":
			return "Hackney and City of London";
	}
	return authority;
}

function getSingleAuthority(authority) {
	switch (authority) {
		case "Cornwall and Isles of Scilly":
			return "Cornwall";
		case "Hackney and City of London":
			return "City of London";
		case "Awaiting confirmation":
			return "";
	}
	return authority;
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

function createGeoLayer(map, geoData, maxCovidCases, covidData, dayIndex) {
	if (map == null || geoData == null || maxCovidCases == null || covidData == null || dayIndex == null) {
		return null;
	}

	// Helper function to get case count for the given day and authority
	let getCasesCount = (authority) => {
		let item = covidData.CasesByRegion[authority];
		return item ? item[dayIndex] : null;
	};
	
	// Create geoJSON layer
	let geoLayer = L.geoJSON(geoData, {
		style: feature => {
			let authority = getMergedAuthority(feature.properties.ctyua19nm);
			let count = getCasesCount(authority);
			return { 
				className: getRegionColour(count, maxCovidCases), 
				weight: 0.0, 
				fillOpacity: 1.0 
			}
		},
		onEachFeature: (feature, layer) => {
			let authority = getMergedAuthority(feature.properties.ctyua19nm);
			let count = getCasesCount(authority);
			if (count == null) layer.bindPopup(`${authority}<br/>No data`);
			else layer.bindPopup(`${authority}<br/>${count} case${count == 1 ? "" : "s"}`);
		}
	});
	
	// Add to map
	geoLayer.addTo(map);
	return geoLayer;
}

function createLegend(map, maxCovidCases) {
	if (map == null || maxCovidCases == null) {
		return null;
	}

	let legend = L.control({position: "topright"});

	legend.onAdd = () => {
		var div = L.DomUtil.create("div", "info legend");
		
		for (let item of listRegionColors(maxCovidCases)) {
			div.innerHTML += `<div class="keyitem">
				<div class="color ${item.color}"><div></div></div>
				<div class="label">${item.label}</div>
			</div>`;
		}

		return div;
	};

	legend.addTo(map);
	return legend;
}