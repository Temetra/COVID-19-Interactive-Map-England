<script>
	import { focusDayIndex, mapLookupFunc } from "~/stores/datastore.js";
	export let payload;
	$: perPop = $mapLookupFunc(payload, $focusDayIndex).perPop;
</script>

<style type="text/scss">
	@import "tableitem";

	div {
		width:160px;
		text-align:center;
		font-family:$table-fontfam;
	}

	div > div {
		background-color:white;
		color:black;
		padding:2rem;
		margin:1rem 0 0 0;
	}
</style>

<div>
	{+perPop.toFixed(2)} per 10,000 people
	<div>Fancy chart</div>
</div>
