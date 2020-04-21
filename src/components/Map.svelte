<script>
	import { onMount } from "svelte";
	import { createMap } from "../modules/map.js";
	let mapElement;
	onMount(() => createMap(mapElement));
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:map;
	}

	section > div {
		width:100%;
		height:100%;
		border-radius:1rem;
	}

	@include breakpoint-min(stacked) {
		section > div {
			border-radius:1rem 0 0 1rem;
		}
	}
</style>

<section>
	<div bind:this={mapElement}></div>
</section>
