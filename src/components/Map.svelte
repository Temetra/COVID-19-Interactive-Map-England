<script>
	import { onMount } from "svelte";
	import { initialiseMap, updateLegend, updateGeoLayer, updateMapFocus } from "../modules/map.js";
	import { geoData, covidRegions, covidLookup, maxCasesForDataset, focusDayIndex, focusRegion } from "../stores/datastore.js";

	// Create map when geodata is loaded
	$: initialiseMap($geoData);

	// Update legend
	$: updateLegend($maxCasesForDataset);

	// Update geo layer
	$: updateGeoLayer($maxCasesForDataset, $covidLookup, $focusDayIndex);

	// Pan and zoom if region selected
	$: updateMapFocus($focusRegion);
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
