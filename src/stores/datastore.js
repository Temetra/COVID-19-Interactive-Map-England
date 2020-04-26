import { writable, derived } from "svelte/store";
import { MapIntervals, RegionData, RegionDataLookup } from "../modules/map-legend.js";

// Fetched data
export const geoData = writable(); // Counties and Unitary Authorities boundary data
export const popData = writable({}); // Estimated population data for mid-2018
export const covidDays = writable([]); // Merged COVID-19 number of cases in England data
export const covidSummary = writable({});
export const covidRegions = writable({});

// User input
export const focusDay = writable(); // Selected day to focus map on
export const focusRegion = writable(); // Selected region to focus map on
export const filterRegion = writable(); // Value to filter region table

// Reset focusDay when covidDays changes
covidDays.subscribe(d => {
	if (d && d.length > 0) focusDay.set(d[d.length-1]);
});

// Derived index of selected day to focus on
export const focusDayIndex = derived([covidDays, focusDay], ([days, focus]) => days.indexOf(focus));

// Map stores
export const mapMode = writable("perPop");
export const mapLookup = writable();
export const mapMaximums = writable();

export const mapIntervals = derived([mapMode, mapMaximums], ([mode, maximums]) => {
	if (maximums && mode in maximums) return maximums[mode].getIntervals();
	else return new MapIntervals(0);
});

export const mapLookupFunc = derived([mapMode, mapLookup, mapMaximums], ([mode, lookup, maximums]) => {
	if (maximums && mode in maximums && lookup && Object.keys(lookup.table).length > 0) return getLookupFunc(mode, lookup, maximums);
	else return defaultLookupFunc;
});

// Get the error result from CaseCount.valueAt()
const defaultLookupFuncValue = { ...(new RegionData().valueAt()), style: null };

// Always return error result
function defaultLookupFunc() {
	return defaultLookupFuncValue;
}

// Returns an arrow function based on mode
// Function takes LAD code and day index
// Result merges region data, and style from interval
function getLookupFunc(mode, lookup, maximums) {
	let intervals = maximums[mode].getIntervals();

	return (code, idx) => {
		// Get data for code and day
		let data = lookup.data(code, idx);

		// If data has value for mode return object
		if (data && mode in data) {
			let style = intervals.getStyle(data[mode]);
			return { ...data, style };
		}
		else {
			// Otherwise return default object
			return defaultLookupFuncValue;
		}
	}
}