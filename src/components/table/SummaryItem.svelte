<script>
	import { tooltipStore } from "~/stores/datastore.js";
	import SummaryDescription from "~/tooltips/SummaryDescription.svelte";
	export let name;
	
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
	div { @extend %table-item; }
</style>

<div 
	on:mouseenter={setTooltip}
	on:mouseleave={clearTooltip}
>
	<slot></slot>
</div>
