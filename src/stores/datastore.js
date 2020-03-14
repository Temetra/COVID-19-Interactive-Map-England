import { writable, derived } from "svelte/store";

// Counties and Unitary Authorities boundary data
export const geoData = writable();

// Merged COVID-19 number of cases in England data
export const covidData = writable();

// Selected day to focus map on
export const focusDay = writable();

// Selected region to focus map on
export const focusRegion = writable();

// Value to filter region table
export const filterRegion = writable();

// Derived statistic for colouring regions
export const maxCovidCases = derived(covidData, $covidData => getMaxCovidCases($covidData));

// Derived list of days recorded in dataset
export const availableDays = derived(covidData, $covidData => getAvailableDays($covidData));

// Reset focusDay when availableDays changes
availableDays.subscribe(d => {
	if (d && d.length > 0) focusDay.set(d[d.length-1]);
});

// Queries the first record for property names; assuming all records have a full set of data
function getAvailableDays(json) {
	if (json) {
		let authorities = Object.keys(json);
		let name = authorities[0];
		return Object.keys(json[name]);
	}
	return [];
}

// Finds the highest number of cases over the entire dataset
function getMaxCovidCases(json) {
	let max = 0;
	if (json) {
		// Iterate over Upper Tier Local Authorities
		let authorities = Object.keys(json);
		for (let i = 0; i < authorities.length; i++) {
			let name = authorities[i];
			// Ignore meta authority
			if (name != "Awaiting confirmation") {
				// Iterate over dates
				let days = Object.keys(json[name]);
				for (let q = 0; q < days.length; q++) {
					let day = days[q];
					let cases = json[name][day];
					// Update max cases
					if (max < cases) max = cases;
				}
			}
		}
	}
	return max;
}