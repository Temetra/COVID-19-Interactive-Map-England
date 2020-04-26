const defaultStyles = [
	"region-unknown",
	"region-zero",
	"region-one",
	"region-two",
	"region-three",
	"region-four",
	"region-five"
];

const defaultIntervals = 5;

// Value-based intervals start from 2
// region-unknown and region-zero are special cases
const defaultOffset = (defaultStyles.length - defaultIntervals);

function defaultIntervalIndex(value, size) {
	if (value == null || value == undefined) return 0;
	if (value == 0) return 1;
	let maxIndex = defaultIntervals - 1; // -1 because zero indexed
	let index = Math.floor(value / size);
	return defaultOffset + Math.min(maxIndex, index);
}

function defaultDescriptionValues(k, size) {
	if (k == 0) return { unknown:true };
	if (k == 1) return { zero:true };
	let to = (k - 1) * size;
	if (k == defaultOffset) return { to };
	let from = (k - defaultOffset) * size;
	if (k - 1 == defaultIntervals) return { from };
	return { from, to };
}

export class RegionData {
	constructor(name = null, raw = [], perPop = []) {
		this.name = name;
		this.raw = raw;
		this.perPop = perPop;
	}

	valueAt(idx) {
		if (idx !== undefined && idx >= 0 && idx < this.raw.length) {
			return { name:this.name, raw:this.raw[idx], perPop:this.perPop[idx] };
		}
		else {
			return { name:this.name, raw:null, perPop:null };
		}
	}
}

export class RegionDataLookup {
	constructor() {
		this.table = {};
	}
	
	update(name, codes, cases, popJson) {
		// Get total population for codes within group
		let pop = codes.reduce((prev, code) => prev + popJson[code].Pop, 0);

		// Calculate cases per 10k pop
		let perPop = cases.reduce((arr, count) => { arr.push(count / (pop / 10000.0)); return arr; }, []);

		// Create data object
		let data = new RegionData(name, cases, perPop);

		// Add to lookup
		for (let code of codes) {
			this.table[code] = data;
		}

		// Return data for more processing
		return data;
	}

	data(code, idx) {
		if (code in this.table) return this.table[code].valueAt(idx);
		else return new RegionData().valueAt();
	}
}

export class MaxCases {
	constructor(val = 0) {
		this.value = val;
	}

	update(arr) {
		// Find largest value in array, or current value
		this.value = arr.reduce((prev, curr) => curr > prev ? curr : prev, this.value);
	}

	getIntervals() {
		return new MapIntervals(this.value);
	}
}

const defaultIntervalSettings = [
	defaultStyles, 
	defaultIntervals, 
	defaultIntervalIndex, 
	defaultDescriptionValues,
];

export class MapIntervals {
	constructor(max, [styles, intervals, getIntv, getDesc] = defaultIntervalSettings) {
		this.styles = styles;
		this.getInterval = getIntv;
		this.getDescription = getDesc;

		// Calculate step size
		this.size = Math.round(max / intervals / intervals) * intervals;

		// Get order of magnitude less one
		let magnitude = Math.pow(10, Math.floor(Math.log(max) / Math.LN10) - 1);

		// Round to closest
		if (magnitude > 1) this.size = Math.round(this.size / magnitude) * magnitude;
	}

	getRangeByIndex(k) {
		let values = this.getDescription(k, this.size);
		let style = this.styles[k];
		return { values, style };
	}

	getRange(value) {
		let k = this.getInterval(value, this.size);
		return this.getRangeByIndex(k);
	}

	getStyle(value) {
		let k = this.getInterval(value, this.size);
		return this.styles[k];
	}

	* [Symbol.iterator]() {
		if (this.size > 0) {
			for (let k = 0; k < this.styles.length; k++) {
				yield this.getRangeByIndex(k);
			}
		}
	}
}
