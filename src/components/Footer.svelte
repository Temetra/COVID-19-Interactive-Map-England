<script>
</script>

<style type="text/scss">
	@import "breakpoints";

	footer {
		grid-area:footer;
		padding: 0 0 1rem 0;
		text-align: left;

		@include breakpoint-minmax(tablet, widescreen) {
			div {
				display: inline;
			}
		}

		@include breakpoint-min(widescreen) {
			padding: 0 1rem 1rem 0;
			text-align: right;
		}
	}
</style>

<footer>
	<div>Source: Office for National Statistics licensed under the Open Government Licence v.3.0.</div>
	<div>Website <a href="https://github.com/Temetra/COVID-19-Interactive-Map-England">available on GitHub</a>, licensed under MIT.</div>
</footer>
