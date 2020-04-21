import { writable, derived } from "svelte/store";

// Counties and Unitary Authorities boundary data
export const geoData = writable();

// Estimated population data for mid-2018
export const popData = writable();

// Merged COVID-19 number of cases in England data
export const covidDays = writable([]);
export const covidSummary = writable({});
export const covidRegions = writable({});

// Selected day to focus map on
export const focusDay = writable();

// Selected region to focus map on
export const focusRegion = writable();

// Value to filter region table
export const filterRegion = writable();

// Derived index of selected day to focus on
export const focusDayIndex = derived([covidDays, focusDay], ([days, focus]) => days.indexOf(focus));

// Derived statistic for colouring regions
export const maxCasesForDataset = derived(covidRegions, regions => getMaxCasesForDataset(regions));

// Derived lookup table for regions based on code
export const covidLookup = derived(covidRegions, regions => getLookupTable(regions));

// Derived store for triggering map component updates
export const geoLayerSource = derived([geoData, covidLookup, maxCasesForDataset, focusDayIndex], data => data);

// Reset focusDay when covidDays changes
covidDays.subscribe(d => {
	if (d && d.length > 0) focusDay.set(d[d.length-1]);
});

// Creates a region code lookup table for case data
// { "Exxxxxxxx": { Name: "ABC", Cases: [0..n] }, ... }
function getLookupTable(covidRegions) {
	return Object.entries(covidRegions).reduce((table, [name, data]) => {
		// Create an item entry for each code a region has
		for (let code of data.Codes) {
			table[code] = { Name:name, Cases:data.Cases };
		}
		return table;
	}, {});
}

// Finds the highest number of cases over the entire dataset
function getMaxCasesForDataset(covidRegions) {
	return Object.values(covidRegions).reduce((subtotal, data) => {
		return data.Cases.reduce((prev, curr) => curr > prev ? curr : prev, subtotal);
	}, 0);
}
