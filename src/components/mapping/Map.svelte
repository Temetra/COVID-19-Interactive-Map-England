<script>
	import { onMount } from "svelte";
	import { geoData, mapLookupFunc, focusDayIndex, focusRegion } from "~/stores/datastore.js";
	import { createMap, addGeoData, updateGeoLayer, updateMapFocus } from "~/modules/map.js";
	
	// Container element for Leaflet
	let mapElement, mapReady = false;
	
	// Create Leaflet map when component mounts
	onMount(() => createMap(mapElement).then(() => mapReady = true));

	// Add GeoJson when loaded
	$: if (mapReady) addGeoData($geoData);

	// Update Geo layer
	$: if (mapReady) updateGeoLayer($mapLookupFunc, $focusDayIndex);

	// Focus on region
	$: if (mapReady) updateMapFocus($focusRegion);
</script>

<style type="text/scss">
	@import "breakpoints";

	section {
		grid-area:map;
	
		div {
			width:100%;
			height:100%;
			border-radius:1rem;
		}
	}

	@include breakpoint-max(mobile) {
		:global(.leaflet-container .legend) {
			display:none;
		}
	}

	@include breakpoint-min(tablet) {
		section {
			padding:1rem 0;

			div {
				border-radius:1rem 0 0 1rem;
			}
		}
	}

	@include breakpoint-min(widescreen) {
		section {
			padding:0;
		}
	}
</style>

<section>
	<div bind:this={mapElement}></div>
</section>
