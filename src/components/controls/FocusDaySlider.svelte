<script>
	import { focusDay, focusDayIndex, covidDays } from "~/stores/datastore.js";

	const dtf = new Intl.DateTimeFormat("en-GB", { weekday: "short", year: "numeric", month: "long", day: "numeric" });

	let formattedDate = "Date";

	$: {
		if ($focusDay) formattedDate = dtf.format(new Date($focusDay));
	}

	let changeDay = (event) => {
		focusDay.set($covidDays[event.target.value]);
	};

	let getMaxDays = (count) => {
		return (count > 0) ? count - 1 : 0;
	};
</script>

<style type="text/scss">
	@import "shared";

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
		max={getMaxDays($covidDays.length-1)} 
		value={$focusDayIndex}
		on:input={changeDay}>
</section>
