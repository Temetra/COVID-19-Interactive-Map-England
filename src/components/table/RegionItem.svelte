<script>
	import { fade } from "svelte/transition";
	import { tooltipStore } from "~/stores/datastore.js";
	import RegionData from "~/tooltips/RegionData.svelte";

	export let name, 
		cases, 
		codes, 
		focusDayIndex, 
		focusRegion;
	
	let currentCount, 
		change, 
		increase, 
		decrease, 
		same, 
		selected;

	$: {
		// Count for region and selected day
		currentCount = cases[focusDayIndex];

		// Change in count since previous recorded day
		change = focusDayIndex == 0 ? currentCount : currentCount - cases[Math.max(focusDayIndex - 1, 0)];
		
		// Class style shortcuts
		increase = (change > 0);
		decrease = (change < 0);
		same = (change == 0);
		selected = (codes[0] == focusRegion);
	}

	function setTooltip(event) {
		tooltipStore.set({ 
			target: event.target, 
			template: RegionData, 
			payload: codes[0] 
		});
	}

	function clearTooltip() {
		tooltipStore.set();
	}
</script>

<style type="text/scss">
	@import "tableitem";
	@import "onhover";

	.item {
		@extend %table-item;
		cursor:pointer;
		@include on-hover { background:#dbf8fd; }
		&.selected { background:#dbf8fd; }
	}
</style>

<div class="item"
	class:selected 
	transition:fade 
	on:click
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<div class="name">{name}</div>
	<span class="count">{currentCount.toLocaleString()}</span>
	<span class:same class:decrease class:increase>{change}</span>
</div>
