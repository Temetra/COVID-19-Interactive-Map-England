<script>
	import { onMount } from "svelte";
	import Header from "./Header.svelte";
	import Map from "./Map.svelte";
	import Controls from "./Controls.svelte";
	import CasesTable from "./CasesTable.svelte";
	import FlowTable from "./FlowTable.svelte";
	import Footer from "./Footer.svelte";
	import { geoData, covidDays, covidSummary, covidRegions } from "../stores/datastore.js";

	onMount(async () => {
		fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json")
			.then(result => result.json())
			.then(json => geoData.set(json))
			.then(() => fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json"))
			.then(result => result.json())
			.then(json => {
				covidDays.set(json.Labels);
				covidSummary.set(json.Summary);
				covidRegions.set(json.CasesByRegion);
			})
			.catch(err => console.error(err));
	});
</script>

<style type="text/scss">
	@import "../scss/shared";

	.container {
		display:grid;
		grid-template-areas:
			"header"
			"map"
			"controls"
			"data"
			"footer";
		grid-template-columns:minmax(600px, 1fr);
		grid-template-rows:auto minmax(600px, 1fr) auto auto auto;
		gap:1rem 0;
		margin:0 1rem;
		height:100vh;
	}

	@include breakpoint-min(stacked) {
		.container {
			grid-template-areas:
				"header header"
				"controls map"
				"data map"
				"footer footer";
			grid-template-columns:400px 1fr;
			grid-template-rows:auto auto minmax(300px, 1fr) auto;
			margin:0;

			&>:global(section) {
				margin-left:1rem;
			}

			&>:global(header), &>:global(footer) {
				margin-left:1rem;
				margin-right:1rem;
			}
		}
	}

	@include breakpoint-min(widescreen) {
		.container {
			grid-template-areas:
				"header header"
				"controls map"
				"data map"
				"footer footer";
			grid-template-columns:555px 1fr;
			grid-template-rows:auto auto minmax(350px, 1fr) auto;
		}
	}
</style>

<div class="container">
	<Header />
	<Map />
	<Controls />
	<FlowTable />
	<Footer />
</div>
