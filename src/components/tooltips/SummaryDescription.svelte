<script>
	import { covidSummary } from "~/stores/datastore.js";
	export let payload;
	$: desc = $covidSummary[payload].Description;
</script>

<style type="text/scss">
	@import "tableitem";

	div {
		width:175px;
		text-align:center;
		font-family:$table-fontfam;
	}
</style>

<div>{desc}</div>