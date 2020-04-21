<script>
	import { onMount } from "svelte";
	import Header from "./Header.svelte";
	import Map from "./Map.svelte";
	import Controls from "./Controls.svelte";
	import Summary from "./Summary.svelte";
	import FlowTable from "./FlowTable.svelte";
	import Footer from "./Footer.svelte";
	import { geoData, popData, covidDays, covidSummary, covidRegions } from "../stores/datastore.js";

	onMount(async () => {
		let boundaries = fetch("./data/Counties_and_Unitary_Authorities_April_2019_Boundaries_EW_BUC.json")
			.then(result => result.json())
			.then(json => geoData.set(json))
			.then(() => console.log("Boundaries loaded"));
		
		let population = fetch("./data/Population-mid-2018.json")
			.then(result => result.json())
			.then(json => popData.set(json))
			.then(() => console.log("Population loaded"));
		
		let ukcases = fetch("./data/Coronavirus-COVID-19-number-of-cases-in-England.json")
			.then(result => result.json())
			.then(json => {
				covidDays.set(json.Labels);
				covidSummary.set(json.Summary);
				covidRegions.set(json.CasesByRegion);
			})
			.then(() => console.log("Cases loaded"));

		Promise.all([boundaries, population, ukcases])
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
			"summary"
			"data"
			"footer";
		grid-template-columns:minmax(600px, 1fr);
		grid-template-rows:auto minmax(600px, 1fr) auto auto auto auto;
		gap:1rem 0;
		margin:0 1rem;
		height:100vh;
	}

	@include breakpoint-min(stacked) {
		.container {
			grid-template-areas:
				"header header"
				"controls map"
				"summary map"
				"data map"
				"footer footer";
			grid-template-columns:400px 1fr;
			grid-template-rows:auto auto auto minmax(300px, 1fr) auto;
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
				"summary map"
				"data map"
				"footer footer";
			grid-template-columns:555px 1fr;
			grid-template-rows:auto auto auto minmax(350px, 1fr) auto;
		}
	}
</style>

<div class="container">
	<Header />
	<Map />
	<Controls />
	<Summary />
	<FlowTable />
	<Footer />
</div>
