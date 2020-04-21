<script>
	import { onMount } from "svelte";
	import Header from "./Header.svelte";
	import Map from "./Map.svelte";
	import Controls from "./Controls.svelte";
	import Summary from "./Summary.svelte";
	import FlowTable from "./FlowTable.svelte";
	import Footer from "./Footer.svelte";
	import { fetchData } from "../modules/fetch-data.js";
	onMount(fetchData);
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
