<script>
	import { filterRegion } from "../stores/datastore.js";

	let resetFilter = () => filterRegion.set("");
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:filter;
	}
	
	.inputgroup {
		display:flex;
		height:2.5rem;
		
		div {
			border-radius:0 7px 7px 0;
			
			button {
				@extend %button-shared;
				width:100%;
				height:100%;
				padding:0 0.5rem;

				img {
					height:2rem;
				}

				&:hover {
					img {
						filter:invert(100%);
					}
				}
			}
		}

		input {
			@extend %input-shared;
			border-top-right-radius:0;
			border-bottom-right-radius:0;
			flex:auto;
			height:100%;
			width:0;
		}
	}

	h2 {
		background-image: url("img/search-outline.svg");
		background-repeat: no-repeat;
		background-size: 20px;
		padding-left: 2rem;
		background-position: left center;
	}
</style>

<section>
	<h2>Search for a region</h2>
	<div class="inputgroup">
		<input bind:value={$filterRegion}>
		<div>
			<button on:click={resetFilter}><img src="img/close.svg" alt="clear" /></button>
		</div>
	</div>
</section>
