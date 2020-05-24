<script>
	import { onMount } from "svelte";
	import sparkline from "@fnando/sparkline";
	import { focusDayIndex, mapLookupFunc, covidSummary, mapLookup } from "~/stores/datastore.js";
	export let position, payload;
	let totalChart, regionChart;
	$: perPop = $mapLookupFunc(payload, $focusDayIndex).perPop;

	onMount(() => {
		let totalCases = $covidSummary["Total cases"].Data;
		let regionCases = $mapLookup.table[payload].raw;
		sparkline(totalChart, totalCases);
		sparkline(regionChart, regionCases);
	})
</script>

<style type="text/scss">
	@import "tableitem";
	@import "tooltips";

	$tooltip-background:white;
	$tooltip-foreground:black;

	@include tooltip(".container", ".pointer", ".content");

	.container {
		width:260px;
		text-align:center;
		font-family:$table-fontfam;
		filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));

		.content {
			padding:0.75rem;
			border-radius:0.25rem;
		}

		svg {
			display:block;
			margin:0 auto 0 auto;
		}
		
		svg:nth-child(1) {
			margin-top:1rem;
			stroke:scale-color(black, $lightness: 50%);
			fill:none;
		}

		svg:nth-child(2) {
			margin-top:-95px;
			stroke:scale-color(red, $alpha: -25%);
			fill:scale-color(red, $alpha: -85%);
		}
	}
</style>

<div 
	class="container"
	class:top={position == "top"}
	class:bottom={position == "bottom"}
>
	<div class="pointer"></div>
	<div class="content">
		{+perPop.toFixed(2)} per 10,000 people
		<svg bind:this={totalChart} width="250" height="95" stroke-width="2"></svg>
		<svg bind:this={regionChart} width="250" height="95" stroke-width="2"></svg>
	</div>
</div>
