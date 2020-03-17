<script>
	import { onMount } from "svelte";
	import Header from "./Header.svelte";
	import Map from "./Map.svelte";
	import FocusDayPicker from "./FocusDayPicker.svelte";
	import RegionalFilter from "./RegionalFilter.svelte";
	import CasesTable from "./CasesTable.svelte";
	import Footer from "./Footer.svelte";
	import { getJSON } from "../lib.js";
	import { geoData, covidData } from "../stores/datastore.js";

	onMount(async () => {
		getJSON("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json")
			.then(json => {
				geoData.set(json);
				return getJSON("./data/Coronavirus-COVID-19-number-of-cases-in-England.json");
			})
			.then(json => {
				covidData.set(json);
			});
	});
</script>

<style type="text/scss">
	@import "../scss/shared";

	.container {
		display:grid;
		grid-template-areas:
			"header header header"
			"picker filter map"
			"data data map"
			"footer footer footer";
		grid-template-columns:250px 250px 1fr;
		grid-template-rows:auto auto minmax(350px, 1fr) auto;
		height:100vh;
	}

	@media only screen and (max-width: $breakpoint) {
		.container {
			grid-template-areas:
				"header"
				"map"
				"picker"
				"filter"
				"data"
				"footer";
			grid-template-columns:minmax(600px, 1fr);
			grid-template-rows:auto minmax(600px, 1fr) auto;
		}
	}
</style>

<div class="container">
	<Header />
	<Map />
	<FocusDayPicker />
	<RegionalFilter />
	<CasesTable />
	<Footer />
</div>
