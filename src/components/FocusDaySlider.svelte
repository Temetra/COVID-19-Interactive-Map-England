<script>
	import { focusDay, focusDayIndex, focusRegion, availableDays } from "../stores/datastore.js";

	var changeDay = (event) => {
		focusRegion.set("");
		focusDay.set($availableDays[event.target.value]);
	};
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:slider;
			margin:2rem 1rem 0 1rem;
	}

	input[type=range] {
		width:100%;
	}

	@media only screen and (max-width: $breakpoint) {
		section {
			margin:1rem 1rem 0 1rem;
		}
	}
</style>

<section>
	<h2>Pick date within range</h2>
	<input type="range" 
		min="0" 
		max={$availableDays.length-1} 
		value={$focusDayIndex}
		on:input={changeDay}>
</section>
