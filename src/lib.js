export function getJSON(src) {
	return fetch(src)
		.then(result => result.json())
		.catch(err => console.error(err));
}

export function getMergedAuthority(authority) {
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

export function getSingleAuthority(authority) {
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

export function getCasesCount(data, authority, day) {
	let item = data[authority];
	return item ? item[day] : null;
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

export function generateColorNumbers(max) {
	return [0, ...Array.from(colors_arr, (_, x) => Math.ceil(max/(regionColors.length-2)*x+1))];
}

export function listRegionColors(max) {
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

export function getRegionColour(count, max) {
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

export function createGeoLayer(map, geoData, covidData, maxCovidCases, day) {
	if (map == null || geoData == null || covidData == null || maxCovidCases == null || day == null) {
		return null;
	}

	// Create geoJSON layer
	let geoLayer = L.geoJSON(geoData, {
		style: feature => {
			let authority = getMergedAuthority(feature.properties.ctyua19nm);
			let count = getCasesCount(covidData, authority, day);
			return { 
				className: getRegionColour(count, maxCovidCases), 
				weight: 0.0, 
				fillOpacity: 1.0 
			}
		},
		onEachFeature: (feature, layer) => {
			let authority = getMergedAuthority(feature.properties.ctyua19nm);
			let count = getCasesCount(covidData, authority, day);
			if (count == null) layer.bindPopup(`${authority}<br/>No data`);
			else layer.bindPopup(`${authority}<br/>${count} case${count == 1 ? "" : "s"}`);
		}
	});
	
	// Add to map
	geoLayer.addTo(map);
	return geoLayer;
}


export function createLegend(map, maxCovidCases) {
	if (map == null || maxCovidCases == null) {
		return null;
	}

	let legend = L.control({position: "topright"});

	legend.onAdd = () => {
		var div = L.DomUtil.create("div", "info legend");
		
		div.innerHTML += "<div class=\"legend\">";

		for (let item of listRegionColors(maxCovidCases)) {
			div.innerHTML += `<div class="keyitem">
				<div class="color ${item.color}"><div></div></div>
				<div class="label">${item.label}</div>
			</div>`;
		}

		div.innerHTML += "</div>";

		return div;
	};

	legend.addTo(map);
	return legend;
}