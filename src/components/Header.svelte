<script>
</script>

<style type="text/scss">
	@import "breakpoints";

	header {
		grid-area:header;
	}

	h1 {
		padding: 1rem 0 0 0;
	}

	@include breakpoint-min(widescreen) {
		h1 {
			margin: 1rem 0 1rem 0;
		}
	}
</style>

<header>
	<h1>
		<span>Interactive map of Coronavirus (COVID-19)</span>
		<span>cases in England</span>
	</h1>
</header>
