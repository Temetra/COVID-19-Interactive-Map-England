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

const opacity = "0.33";

const regionColors = [
	`rgba(86, 228, 86, ${opacity})`,
	`rgba(255, 255, 0, ${opacity})`,
	`rgba(255, 191, 0, ${opacity})`,
	`rgba(255, 127, 0, ${opacity})`,
	`rgba(255, 63, 0, ${opacity})`,
	`rgba(255, 0, 0, ${opacity})`,
];

const colors_arr = Array(regionColors.length);

function generateColorNumbers(max) {
	return Array.from(colors_arr, (_, x) => Math.floor(max/regionColors.length*x));
}

export function listRegionColors(max) {
	if (max == 0) return [];
	let labels = ["Unknown", ...generateColorNumbers(max).map(q => q == 1 ? "1 case" : `${q} cases`)];
	let colors = ["rgba(0, 0, 0, 0.0625)", ...regionColors];
	return labels.map((label, idx) => {
		return { 
			label,
			color: colors[idx]
		};
	});
}

export function getRegionColour(count, max) {
	// Default colour for a null case count
	if (count == null) return "rgba(0, 0, 0, 0.0625)";

	// Generate range of n numbers, from 0 to max
	let nums = generateColorNumbers(max);

	// Find the first colour that fits the count
	for (let x = nums.length; x >= 0; x--) {
		if (count >= nums[x]) {
			return regionColors[x];
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
				color: getRegionColour(count, maxCovidCases), 
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
				<div class="color" style="background-color:${item.color};"></div>
				<div class="label">${item.label}</div>
			</div>`;
		}

		div.innerHTML += "</div>";

		return div;
	};

	legend.addTo(map);
	return legend;
}