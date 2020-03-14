<script>
	import { onMount } from "svelte";
	import { createGeoLayer, createLegend, getSingleAuthority } from "../lib.js";
	import { geoData, covidData, maxCovidCases, focusDay, focusRegion } from "../stores/datastore.js";

	// Settings
	const center = { lat: 52.914639, lon: -1.47189 }
	const zoom = 7;
	const focusZoom = 9;
	const showTiles = true;

	// Variables
	var map, legend, tileLayer, geoLayer;

	// Initialise map when component is mounted
	onMount(async () => {
		map = L.map("leaflet_ele", {
			center,
			zoom
		});
		
		tileLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			subdomains: 'abcd',
			minZoom: 0,
			maxZoom: 20,
			ext: 'png'
		});
		
		if (showTiles) tileLayer.addTo(map);
	});

	// Update legend when stores update
	$: {
		if (legend) legend.remove();
		legend = createLegend(map, $maxCovidCases);
	}

	// Update geo layer when stores update
	$: {
		if (geoLayer) geoLayer.remove();
		geoLayer = createGeoLayer(map, $geoData, $covidData, $maxCovidCases, $focusDay);
	}

	// Pan and zoom if region selected
	$: {
		if ($focusRegion != null) {
			let authority = getSingleAuthority($focusRegion);
			if (authority.length > 0) {
				for (let value of Object.values(geoLayer._layers)) {
					if (authority == value.feature.properties.ctyua19nm) {
						value.openPopup();
						map.setView(value.getCenter(), focusZoom, { animate: true });
						window.scrollTo(0, 0);
					}
				}
			} else {
				map.closePopup();
				map.setView(center, zoom, { animate: true });
				window.scrollTo(0, 0);
			}
		}
	}
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
