<script>
	import { tooltipStore } from "~/stores/datastore.js";
	import Item from "~/table/Item.svelte";
	import SummaryDescription from "~/tooltips/SummaryDescription.svelte";

	export let name, cases, focusDayIndex;

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
	.item { @extend %table-item; }
</style>

<div 
	class="item"
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<Item {name} {cases} {focusDayIndex} />
</div>
