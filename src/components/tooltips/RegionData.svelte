<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import sparkline from "@fnando/sparkline";
	import { focusDayIndex, mapLookup, mapMaximums } from "~/stores/datastore.js";
	export let position, payload;

	let totalChart, regionChart;

	let england = $mapLookup.table["E92000001"];
	let region = $mapLookup.table[payload];
	let minScale = Math.max(england.perPopMax, region.perPopMax);
	$: perPop = region.perPop[$focusDayIndex];

	onMount(() => {
		sparkline(totalChart, england.perPop, { minScale });
		sparkline(regionChart, region.perPop, { minScale });
	})
</script>

<style type="text/scss">
	@import "tableitem";
	@import "tooltips";

	$tooltip-background:white;
	$tooltip-foreground:black;

	@include tooltip(".container", ".pointer", ".content");

	.container {
		text-align:center;
		font-family:$table-fontfam;
		filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.66));

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
			margin-top:-50px;
			stroke:scale-color(red, $alpha: -25%);
			fill:scale-color(red, $alpha: -85%);
		}
	}
</style>

<div 
	class="container"
	class:top={position == "top"}
	class:bottom={position == "bottom"}
	transition:fade="{{ duration: 150 }}"
>
	<div class="pointer"></div>
	<div class="content">
		{+perPop.toFixed(2)} per 10,000 people
		<svg bind:this={totalChart} width="200" height="50" stroke-width="2"></svg>
		<svg bind:this={regionChart} width="200" height="50" stroke-width="2"></svg>
	</div>
</div>
