<script>
	import { fade } from "svelte/transition";
	import { covidSummary } from "~/stores/datastore.js";
	export let position, payload;
	$: desc = $covidSummary[payload].Description;
</script>

<style type="text/scss">
	@import "tableitem";
	@import "tooltips";

	@include tooltip(".container", ".pointer", ".content");

	.container {
		font-family:$table-fontfam;

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
	transition:fade="{{ duration: 150 }}"
>
	<div class="pointer"></div>
	<div class="content">{desc}</div>
</div>
