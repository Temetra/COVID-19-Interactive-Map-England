<script>
	import { filterRegion } from "~/stores/datastore.js";

	let resetFilter = () => filterRegion.set("");
</script>

<style type="text/scss">
	@import "onhover";

	section {
		grid-area:filter;
	}
	
	.inputgroup {
		display:flex;
		height:2.5rem;
		
		div {
			border-radius:0 7px 7px 0;
			
			button {
				display:flex;
				width:100%;
				height:100%;
				padding:0 0.5rem;
				align-items:center;
				background-color:#cdcdcd;
				border:solid 1px #cdcdcd;
				border-radius:0 7px 7px 0;

				@include on-hover {
					border-color:#a6a6a6;
					background-color:#a6a6a6;
				}

				&:focus {
					outline:none;
				}

				img {
					height:2rem;
				}

				@include on-hover {
					img {
						filter:invert(100%);
					}
				}
			}
		}

		input {
			flex:auto;
			width:0;
			height:100%;
			padding:0.5rem;
			font-size:11pt;
			border:solid 1px #cdcdcd;
			border-radius:7px 0 0 7px;
			-webkit-appearance:none;

			@include on-hover {
				border-color:#a6a6a6;
			}

			&:focus {
				outline:none;
			}
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
