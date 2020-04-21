import { geoData, popData, covidDays, covidSummary, covidRegions } from "../stores/datastore.js";

export async function fetchData() {
	let boundaries = fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json")
		.then(result => result.json())
		.then(json => geoData.set(json))
		.then(() => console.log("Boundaries loaded"));

	let population = fetch("./data/Population-mid-2018.json")
		.then(result => result.json())
		.then(json => popData.set(json))
		.then(() => console.log("Population loaded"));

	let ukcases = fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json")
		.then(result => result.json())
		.then(json => {
			covidDays.set(json.Labels);
			covidSummary.set(json.Summary);
			covidRegions.set(json.CasesByRegion);
		})
		.then(() => console.log("Cases loaded"));

	return Promise.all([boundaries, population, ukcases])
		.catch(err => console.error(err));
}