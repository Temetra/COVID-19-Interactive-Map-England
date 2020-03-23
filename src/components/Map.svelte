<script>
	import { onMount } from "svelte";
	import { initialiseMap, updateLegend, updateGeoLayer, updateMapFocus } from "../modules/map.js";
	import { geoData, covidRegions, maxCasesForDataset, focusDayIndex, focusRegion } from "../stores/datastore.js";

	// Create map when geodata is loaded
	// Erase loaded data when done
	$: {
		initialiseMap($geoData);
		geoData.set(null);
	}

	// Update legend
	$: updateLegend($maxCasesForDataset);

	// Update geo layer
	$: updateGeoLayer($maxCasesForDataset, $covidRegions, $focusDayIndex);

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
		border-radius:1rem 0 0 1rem;
	}

	@media only screen and (max-width: $breakpoint) {
		#leaflet_ele {
			border-radius:0;
		}
	}
</style>

<section>
	<div id="leaflet_ele"></div>
</section>
