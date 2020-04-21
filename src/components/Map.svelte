<script>
	import { onMount } from "svelte";
	import "../modules/map.js";
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:map;
	}

	#leaflet_ele {
		width:100%;
		height:100%;
		border-radius:1rem;
	}

	@include breakpoint-min(stacked) {
		#leaflet_ele {
			border-radius:1rem 0 0 1rem;
		}
	}
</style>

<section>
	<div id="leaflet_ele"></div>
</section>
