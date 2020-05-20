<script>
	import { fade } from "svelte/transition";
	import { tooltipStore } from "~/stores/datastore.js";
	import Item from "~/table/Item.svelte";
	import RegionData from "~/tooltips/RegionData.svelte";

	export let name, cases, focusDayIndex, 
		codes, focusRegion;

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

<div
	class="item"
	class:selected={codes[0] == focusRegion}
	transition:fade 
	on:click
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<Item {name} {cases} {focusDayIndex} />
</div>
