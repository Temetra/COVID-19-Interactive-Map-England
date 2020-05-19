<script>
	import { 
		focusDay, 
		focusDayIndex, 
		focusRegion, 
		covidDays, 
		filterRegion, 
		covidSummary, 
		covidRegions,
		mapLookupFunc
	}
	from "~/stores/datastore.js";
	
	import FlowTableItem from "./FlowTableItem.svelte";

	let filteredItems = [];

	let selectRegion = (codes) => {
		if (!codes || codes[0] == $focusRegion) focusRegion.set(null);
		else focusRegion.set(codes[0]);
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
	@import "shared";

	section {
		grid-area:data;
		overflow-y:auto;
		overflow-x:hidden;

		& :global(:first-child) {
			margin-top:0;
		}
	}

	.container {
		column-count:1;
		column-gap:0;
	}

	@include breakpoint-min(tablet) {
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
		font-family:$table-fontfam;
		padding:0.5rem 0.75rem;
	}

	h2 {
		column-span:all;
		background:#fff;
		border-bottom:solid 1px #ccc;
		padding:0.5rem 0.75rem;
		margin:1rem 0.5rem 0.5rem 0;
		position:sticky;
  		top:0;
	}

	h2.summary {
		background-image: url("img/document-text-outline.svg");
		background-repeat: no-repeat;
		background-size: 18px;
		padding-left: 2rem;
		background-position: left center;
	}
</style>

<section>
	<!-- Summary -->
	<h2 class="summary">Summary</h2>
	<div class="container">
		{#each Object.entries($covidSummary) as [name, item]}
			<FlowTableItem {name} 
				cases={item.Data} 
				focusDayIndex={$focusDayIndex} />
		{/each}
	</div>

	<!-- Filtered items -->
	{#each Object.entries(filteredItems) as [prefix, items]}
		<h2>{prefix}</h2>
		<div class="container">
			{#each items as {name, item} (name)}
				<FlowTableItem {name} 
					cases={item.Cases} 
					codes={item.Codes}
					focusDayIndex={$focusDayIndex} 
					focusRegion={$focusRegion} 
					on:click={() => selectRegion(item.Codes)} />
			{/each}
		</div>
	{/each}
	
	<!-- No items -->
	{#if Object.keys(filteredItems).length == 0}
		<h2>-</h2>
		<div class="no-regions">No regions found</div>
	{/if}
</section>
