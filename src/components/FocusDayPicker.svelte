<script>
	import { focusDay, focusRegion, availableDays } from "../stores/datastore.js";

	var changeDay = (event) => {
		focusRegion.set("");
		focusDay.set(event.target.value);
	};
</script>

<style type="text/scss">
	@import "../scss/shared";

	input {
		@extend %input-shared;
		width:100%;
		height:2.5rem;
	}

	section {
		grid-area:picker;
		margin:0 0.5rem 0 1rem;
	}

	@media only screen and (max-width: $breakpoint) {
		section {
			margin:1rem 1rem 0 1rem;
		}
	}
</style>

<section>
	<h2>Choose a date</h2>
	<input type="date" required
		value={$focusDay} 
		min={$availableDays[0]} 
		max={$availableDays[$availableDays.length-1]}
		on:change={changeDay}>
</section>
