import { writable, derived } from "svelte/store";

// Counties and Unitary Authorities boundary data
export const geoData = writable();

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
export const focusDayIndex = derived([focusDay, covidDays], ([$focusDay, $covidDays]) => $covidDays.indexOf($focusDay));

// Derived statistic for colouring regions
export const maxCasesForDataset = derived(covidRegions, $covidRegions => getMaxCasesForDataset($covidRegions));

// Derived statistic for colouring regions
export const maxCasesForDay = derived([covidRegions, focusDayIndex], ([$covidRegions, $focusDayIndex]) => getMaxCasesForDay($covidRegions, $focusDayIndex));

// Reset focusDay when covidDays changes
covidDays.subscribe(d => {
	if (d && d.length > 0) focusDay.set(d[d.length-1]);
});

// Finds the highest number of cases over the entire dataset
function getMaxCasesForDataset(covidRegions) {
	return Object.values(covidRegions).reduce((subtotal, arr) => {
		return arr.reduce((prev, curr) => {
			return Math.max(prev, curr);
		}, subtotal);
	}, 0);
}

// Finds the highest number of cases for a specific day
function getMaxCasesForDay(covidRegions, day) {
	return Object.values(covidRegions).reduce((subtotal, arr) => {
		return Math.max(subtotal, arr[day]);
	}, 0);
}
