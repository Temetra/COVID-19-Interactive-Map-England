<script>
	import { focusDay, covidDays } from "../stores/datastore.js";

	let changeDay = (event) => {
		focusDay.set(event.target.value);
	};
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:picker;
	}

	input {
		@extend %input-shared;
		width:100%;
		height:2.5rem;
	}
</style>

<section>
	<h2>Choose a date</h2>
	<input type="date" required
		value={$focusDay} 
		min={$covidDays[0]} 
		max={$covidDays[$covidDays.length-1]}
		on:change={changeDay}>
</section>
