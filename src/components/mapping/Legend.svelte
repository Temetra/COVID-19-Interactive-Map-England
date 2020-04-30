<script>
	import { mapIntervals, mapMode } from "~/stores/datastore.js";

	function toggleMapMode() {
		if ($mapMode == "raw") $mapMode = "perPop";
		else $mapMode = "raw";
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
		{#if $mapMode == "perPop"}Cases per 10,000 people
		{:else}Total cases in region
		{/if}
	</div>
	{#each [...$mapIntervals] as {values, style}}
		{#if values.unknown}
			<div class="keyitem">
				<div class="colour {style}"><div></div></div>
				<div class="label">Unknown</div>
			</div>
		{:else if values.zero}
			<div class="keyitem">
				<div class="colour {style}"><div></div></div>
				<div class="label">Zero</div>
			</div>
		{:else if values.to && !values.from}
			<div class="keyitem">
				<div class="colour {style}"><div></div></div>
				<div class="label">Less than {values.to}</div>
			</div>
		{:else if !values.to && values.from}
			<div class="keyitem">
				<div class="colour {style}"><div></div></div>
				<div class="label">{values.from} or more</div>
			</div>
		{:else}
			<div class="keyitem">
				<div class="colour {style}"><div></div></div>
				<div class="label">{values.from}-{values.to-1}</div>
			</div>
		{/if}
	{/each}
{:else}
	Loading...
{/if}
