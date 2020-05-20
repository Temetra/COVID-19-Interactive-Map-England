<script>
	import { fade } from "svelte/transition";
	import RegionData from "~/tooltips/RegionData.svelte";
	import SummaryDescription from "~/tooltips/SummaryDescription.svelte";
	import { tooltipStore } from "~/stores/datastore.js";

	export let name, 
		cases, 
		codes = null, 
		focusDayIndex, 
		focusRegion = null;
	
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
		increase = change > 0;
		decrease = change < 0;
		same = change == 0;
		selected = (codes && codes[0] == focusRegion);
	}

	function setTooltip(event) {
		// Target is element where tooltip should be positioned
		let target = event.target;
		// Template is svelte component constructor for tooltip contents
		let template = (codes ? RegionData : SummaryDescription);
		// Payload is optional data for component
		let payload = (codes ? codes[0] : name);
		// Set store
		tooltipStore.set({ target, template, payload });
	}

	function clearTooltip() {
		// Clear store
		tooltipStore.set();
	}
</script>

<style type="text/scss">
	@import "shared";

	.item {
		font-family:$table-fontfam;
		overflow:hidden;
		break-inside:avoid;
		padding:0.5rem 0.75rem;
		border-radius:1rem;
	}

	.selectable {
		cursor:pointer;
		@include on-hover { background:#dbf8fd; }
	}

	.selected { background:#dbf8fd; }
	.name { margin:0 0 0.25rem 0; }
	.count { margin:0 0.5rem 0 0; }
	.same { display:none; }
	.decrease { color:green; }

	.increase { 
		color:red;
		&::before { content:"+"; }
	}
</style>

<div class="item"
	class:selectable={codes}
	class:selected 
	transition:fade 
	on:click
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<div class="name">{name}</div>
	<span class="count">{currentCount.toLocaleString()}</span>
	<span class="change" class:increase class:decrease class:same>{change}</span>
</div>
