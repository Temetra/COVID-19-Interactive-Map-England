<script>
	import FocusDaySlider from "./FocusDaySlider.svelte";
	import RegionalFilter from "./RegionalFilter.svelte";
</script>

<style type="text/scss">
	@import "breakpoints";

	section {
		grid-area:controls;
		display:grid;
		grid-template-areas:
			"slider"
			"filter";
		grid-template-columns:1fr;
		grid-template-rows:auto;
		gap:1rem;
		margin-bottom:1.5rem;
	}

	@include breakpoint-min(tablet) {
		section {
			grid-template-areas:
				"slider filter";
			grid-template-columns:0.5fr 0.5fr;
			margin-bottom:0;
		}
	}
</style>

<section>
	<FocusDaySlider />
	<RegionalFilter />
</section>
