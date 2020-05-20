<script>
	import { covidRegions, filterRegion, focusRegion, covidSummary } from "~/stores/datastore.js";
	import { filterItems } from "~/modules/flow-table.js";
	import SummaryItem from "./SummaryItem.svelte";
	import RegionItem from "./RegionItem.svelte";
	import ItemBody from "~/table/ItemBody.svelte";

	$: filteredItems = filterItems($covidRegions, $filterRegion);

	function selectRegion(codes) {
		if (!codes || codes[0] == $focusRegion) focusRegion.set(null);
		else focusRegion.set(codes[0]);
	}
</script>

<style type="text/scss">
	@import "breakpoints";
	@import "tableitem";

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
			<SummaryItem {name}>
				<ItemBody {name} cases={item.Data} />
			</SummaryItem>
		{/each}
	</div>

	<!-- Filtered items -->
	{#each Object.entries(filteredItems) as [prefix, items]}
		<h2>{prefix}</h2>
		<div class="container">
			{#each items as {name, item} (name)}
				<RegionItem codes={item.Codes} on:click={() => selectRegion(item.Codes)}>
					<ItemBody {name} cases={item.Cases} />
				</RegionItem>
			{/each}
		</div>
	{/each}
	
	<!-- No items -->
	{#if Object.keys(filteredItems).length == 0}
		<h2>-</h2>
		<div class="no-regions">No regions found</div>
	{/if}
</section>
