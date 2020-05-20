<script>
	import { fade } from "svelte/transition";
	import { tooltipStore, focusRegion } from "~/stores/datastore.js";
	import RegionData from "~/tooltips/RegionData.svelte";

	export let codes;

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

	div {
		@extend %table-item;
		cursor:pointer;
		@include on-hover { background:#dbf8fd; }
		&.selected { background:#dbf8fd; }
	}
</style>

<div
	class:selected={codes[0] == $focusRegion}
	transition:fade 
	on:click
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<slot></slot>
</div>
