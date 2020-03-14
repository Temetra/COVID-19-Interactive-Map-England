<script>
	import FocusDayPicker from "./FocusDayPicker.svelte";
	import RegionalFilter from "./RegionalFilter.svelte";
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		display:flex;
		flex-direction:row;
		grid-area:controls;
		margin:0 1rem;

		:global(&>section) {
			width:100%;
		}

		:global(&>section:first-child) {
			margin-right:0.5rem;
		}

		:global(&>section:last-child) {
			margin-left:0.5rem;
		}
	}

	@media only screen and (max-width: $breakpoint) {
		section {
			flex-direction:column;

			:global(&>section:first-child, &>section:last-child) {
				margin-left:0;
				margin-right:0;
				margin-top:1rem;
			}
		}
	}
</style>

<section>
	<FocusDayPicker />
	<RegionalFilter />
</section>
