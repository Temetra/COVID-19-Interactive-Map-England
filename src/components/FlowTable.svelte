<script>
	import { focusDay, focusDayIndex, focusRegion, covidDays, filterRegion, covidSummary, covidRegions } from "../stores/datastore.js";
	import FlowTableHeading from "./FlowTableHeading.svelte";
	import FlowTableItem from "./FlowTableItem.svelte";

	let filteredItems = [];

	let selectRegion = (event) => {
		if (event.detail == $focusRegion) focusRegion.set(null);
		else focusRegion.set(event.detail);
	};

	let keyFilter = (key, filter) => {
		return key.toUpperCase().includes((filter || "").toUpperCase());
	};

	let itemGrouper = (result, [name, item]) => {
		// Get first letter
		let prefix = name[0];

		// Add to existing object key array, or create new
		if (prefix in result) result[prefix].push({ name, item });
		else result[prefix] = [{ name, item }];

		// Return object
		return result;
	};

	$: {
		// Filter regions by user input
		// Then group by first letter
		// Assumes covidRegions is alphabetically sorted
		filteredItems = Object.entries($covidRegions)
			.filter(([regionName, _]) => keyFilter(regionName, $filterRegion))
			.reduce(itemGrouper, {});
	}
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:data;
		height:100%;

		& :global(:first-child) {
			margin-top:0;
		}
	}

	.container {
		column-count:1;
		column-gap:0;
	}

	@include breakpoint-min(stacked) {
		section {
			overflow-y:auto;
			overflow-x:hidden;
		}

		.container {
			column-count:2;
		}
	}

	@include breakpoint-min(widescreen) {
		.container {
			column-count:3;
		}
	}

	.no-regions {
		font-family:"Roboto", sans-serif;
		padding:0.5rem 0.75rem;
	}
</style>

<section>
	{#each Object.entries(filteredItems) as [prefix, items]}
		<FlowTableHeading {prefix} />
			<div class="container">
			{#each items as {name, item} (name)}
				<FlowTableItem {name} 
					cases={item.Cases} 
					caseIndex={$focusDayIndex} 
					code={item.Codes[0]}
					focusRegion={$focusRegion} 
					on:click={selectRegion} />
			{/each}
			</div>
	{/each}
	{#if Object.keys(filteredItems).length == 0}
		<FlowTableHeading prefix="-" />
		<div class="no-regions">No regions found</div>
	{/if}
</section>
