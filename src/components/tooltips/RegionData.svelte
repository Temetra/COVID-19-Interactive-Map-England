<script>
	import { focusDayIndex, mapLookupFunc } from "~/stores/datastore.js";
	export let position, payload;
	$: perPop = $mapLookupFunc(payload, $focusDayIndex).perPop;
</script>

<style type="text/scss">
	@import "tableitem";
	@import "tooltips";

	$tooltip-background:white;
	$tooltip-foreground:black;

	@include tooltip(".container", ".pointer", ".content");

	.container {
		width:250px;
		text-align:center;
		font-family:$table-fontfam;
		filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));

		.content {
			padding:0.75rem;
			border-radius:0.25rem;
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
		<p>Chart goes here</p>
	</div>
</div>
