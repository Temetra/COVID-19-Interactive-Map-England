<script>
	import { tooltipStore } from "~/stores/datastore.js";
	import SummaryDescription from "~/tooltips/SummaryDescription.svelte";

	export let name, cases, focusDayIndex;
	
	let currentCount, 
		change, 
		increase, 
		decrease, 
		same;

	$: {
		// Count for region and selected day
		currentCount = cases[focusDayIndex];

		// Change in count since previous recorded day
		change = focusDayIndex == 0 ? currentCount : currentCount - cases[Math.max(focusDayIndex - 1, 0)];
		
		// Class style shortcuts
		increase = change > 0;
		decrease = change < 0;
		same = change == 0;
	}

	function setTooltip(event) {
		tooltipStore.set({ 
			target: event.target, 
			template: SummaryDescription, 
			payload: name 
		});
	}

	function clearTooltip() {
		tooltipStore.set();
	}
</script>

<style type="text/scss">
	@import "tableitem";

	.item {
		@extend %table-item;
	}
</style>

<div class="item"
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<div class="name">{name}</div>
	<span class="count">{currentCount.toLocaleString()}</span>
	<span class="change" class:increase class:decrease class:same>{change}</span>
</div>
