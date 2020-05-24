<script>
	import { mapIntervals, mapMode } from "~/stores/datastore.js";

	$: title = ($mapMode == "raw") ? "Total cases in region" : "Cases per 10,000 people";

	function toggleMapMode() {
		$mapMode = ($mapMode == "raw") ? "perPop" : "raw";
	}

	function getLabel(values) {
		if (values.unknown) return "Unknown";
		else if (values.zero) return "Zero";
		else if (values.to && !values.from) return `Less than ${values.to}`;
		else if (!values.to && values.from) return `${values.from} or more`;
		return `${values.from}-${values.to-1}`;
	}
</script>

<style type="text/scss">
	.title {
		cursor:pointer;
		margin-bottom:0.5rem;
	}
</style>

{#if $mapIntervals.size > 0}
	<div class="title" on:click={toggleMapMode}>
		{title}
	</div>
	{#each [...$mapIntervals] as {values, style}}
		<div class="keyitem">
			<div class="colour {style}"><div></div></div>
			<div class="label">{getLabel(values)}</div>
		</div>
	{/each}
{:else}
	Loading...
{/if}
