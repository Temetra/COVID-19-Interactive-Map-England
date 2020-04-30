<script>
	import { 
		focusDay, 
		focusDayIndex, 
		focusRegion, 
		covidDays, 
		filterRegion, 
		covidSummary, 
		covidRegions 
	} from "~/stores/datastore.js";
	import FlowTableItem from "./FlowTableItem.svelte";
</script>

<style type="text/scss">
	@import "shared";

	section {
		grid-area:summary;
		padding-right:1rem;
	}

	.container {
		column-count:1;
		column-gap:0;
	}

	@include breakpoint-min(stacked) {
		.container {
			column-count:2;
		}
	}

	@include breakpoint-min(widescreen) {
		.container {
			column-count:3;
		}
	}

	h2 {
		background-image: url("img/document-text-outline.svg");
		background-repeat: no-repeat;
		background-size: 18px;
		padding-left: 2rem;
		background-position: left center;
	}
</style>

<section>
	<h2>Summary</h2>
	<div class="container">
		{#each Object.entries($covidSummary) as [name, item]}
			<FlowTableItem {name} 
				cases={item} 
				caseIndex={$focusDayIndex} />
		{/each}
	</div>
</section>

