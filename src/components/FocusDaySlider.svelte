<script>
	import { focusDay, focusDayIndex, covidDays } from "../stores/datastore.js";

	const dtf = new Intl.DateTimeFormat("en-GB", { weekday: "short", year: "numeric", month: "long", day: "numeric" });

	let formattedDate = "Date";

	$: {
		if ($focusDay) formattedDate = dtf.format(new Date($focusDay));
	}

	let changeDay = (event) => {
		focusDay.set($covidDays[event.target.value]);
	};
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:slider;
		overflow:hidden;
	}

	input[type=range] {
		width:100%;
		height:2.5rem;
		margin:0;
	}

	h2 {
		background-image: url("img/calendar-outline.svg");
		background-repeat: no-repeat;
		background-size: 18px;
		padding-left: 2rem;
		background-position: left center;
	}
</style>

<section>
	<h2>{formattedDate}</h2>
	<input type="range" 
		min="0" 
		max={$covidDays.length-1} 
		value={$focusDayIndex}
		on:input={changeDay}>
</section>
