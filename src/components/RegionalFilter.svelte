<script>
	import { filterRegion } from "../stores/datastore.js";

	var resetFilter = () => filterRegion.set("");
</script>

<style type="text/scss">
	@import "../scss/shared";

	.inputgroup {
		display: flex;
		height:2.5rem;
		
		div {
			border-radius:0 7px 7px 0;
			
			button {
				@extend %button-shared;
				width:100%;
				height:100%;
			}
		}

		input {
			@extend %input-shared;
			border-top-right-radius:0;
			border-bottom-right-radius:0;
			flex:auto;
			height:100%;
		}
	}
</style>

<section>
	<h2>Search for a region</h2>
	<div class="inputgroup">
		<input bind:value={$filterRegion}>
		<div>
			<button on:click={resetFilter}>&times;</button>
		</div>
	</div>
</section>
