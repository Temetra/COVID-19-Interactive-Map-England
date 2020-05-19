<script>
	import { onMount } from "svelte";
	import { fetchData } from "~/modules/fetch-data.js";
	import Header from "~/Header.svelte";
	import Footer from "~/Footer.svelte";
	import Map from "~/mapping/Map.svelte";
	import Controls from "~/controls/Controls.svelte";
	import FlowTable from "~/table/FlowTable.svelte";
	import Tooltip from "~/tooltips/Tooltip.svelte";
	import { tooltipSource } from "~/stores/datastore.js";
	onMount(fetchData);
</script>

<style type="text/scss">
	@import "shared";

	.container {
		display: grid;
		grid-template-areas:
			"header"
			"map"
			"controls"
			"data"
			"footer";
		grid-template-columns: 1fr;
		grid-template-rows: fit-content(25vh) 66vh auto auto auto;
		gap: 1rem;
		margin: 0 1rem;
	}

	@include breakpoint-min(tablet) {
		.container {
			grid-template-areas:
				"header map"
				"controls map"
				"data map"
				"footer map";
			grid-template-columns: 500px 1fr;
			grid-template-rows: auto auto 1fr auto;
			max-width:100%;
			height: 100vh;
			margin: 0 0 0 1rem;
		}
	}

	@include breakpoint-min(widescreen) {
		.container {
			grid-template-areas:
				"header header"
				"controls map"
				"data map"
				"footer footer";
			grid-template-columns: 555px 1fr;
			grid-template-rows: auto auto 1fr auto;
		}
	}
</style>

<Tooltip source={$tooltipSource} />

<div class="container">
	<Header />
	<Map />
	<Controls />
	<FlowTable />
	<Footer />
</div>
