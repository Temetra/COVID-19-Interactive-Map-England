// Filter regions by user input
// Then group by first letter
// Assumes covidRegions is alphabetically sorted
export function filterItems(covidRegions, filterRegion) {
	return Object.entries(covidRegions)
		.filter(([regionName, _]) => keyFilter(regionName, filterRegion))
		.reduce(itemGrouper, {});
}

function keyFilter(key, filter) {
	return key.toUpperCase().includes((filter || "").toUpperCase());
}

function itemGrouper(result, [name, item]) {
	// Get first letter
	let prefix = name[0];

	// Add to existing object key array, or create new
	if (prefix in result) result[prefix].push({ name, item });
	else result[prefix] = [{ name, item }];

	// Return object
	return result;
}
