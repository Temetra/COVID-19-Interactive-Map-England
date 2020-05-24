import { 
	geoData, 
	popData, 
	covidDays, 
	covidSummary, 
	covidRegions, 
	mapLookup, 
	mapMaximums 
} 
from "~/stores/datastore.js";
import { RegionDataLookup, MaxCases } from "./map-legend.js";

export async function fetchData() {
	let boundaries = fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json")
		.then(result => result.json())
		.then(json => console.log("Boundaries loaded") || json);

	let population = fetch("./data/Population-mid-2018.json")
		.then(result => result.json())
		.then(json => console.log("Population loaded") || json);

	let ukcases = fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json")
		.then(result => result.json())
		.then(json => console.log("Cases loaded") || json);

	return Promise.all([boundaries, population, ukcases])
		.then(processResults)
		.then(updateStores)
		.catch(err => console.error(err));
}

function processResults([geoJson, populationJson, covidJson]) {
	let lookup = new RegionDataLookup();

	// Maximum case values
	let maximums = {
		raw: new MaxCases(),
		perPop: new MaxCases()
	}

	// Add regions to lookup
	for (let [Name, { Codes, Cases }] of Object.entries(covidJson.CasesByRegion)) {
		let data = lookup.update(Name, Codes, Cases, populationJson);
		maximums.raw.update(data.raw);
		maximums.perPop.update(data.perPop);
	}

	// Add country to lookup
	lookup.update("England", ["E92000001"], covidJson.Summary["Total cases"].Data, populationJson);

	return [
		geoJson, 
		populationJson, 
		covidJson, 
		lookup,
		maximums
	];
}

function updateStores([geoJson, populationJson, covidJson, lookup, maximums]) {
	covidDays.set(covidJson.Labels);
	covidSummary.set(covidJson.Summary);
	covidRegions.set(covidJson.CasesByRegion);
	popData.set(populationJson);
	geoData.set(geoJson);
	mapLookup.set(lookup);
	mapMaximums.set(maximums);
}
