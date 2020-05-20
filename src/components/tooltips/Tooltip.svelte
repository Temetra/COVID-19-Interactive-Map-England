<script>
	import { afterUpdate } from "svelte";
	import { showTooltip, hideTooltip } from "~/modules/tooltip.js";
	export let store;
	
	let tooltipElement, position;
	$: target = $store ? $store.target : null;
	$: template = $store ? $store.template : null;
	$: payload = $store ? $store.payload : null;

	// Move tooltip after content is mounted
	afterUpdate(() => {
		if (tooltipElement) {
			if (target) position = showTooltip(target, tooltipElement);
			else hideTooltip(tooltipElement);
		}
	});
</script>

<style type="text/scss">
	section {
		position:relative;
	}

	$pointer-width:0.5rem;
	$pointer-length:0.5rem;
	$background:black;
	$foreground:white;

	.tooltip {
		position:absolute;
		z-index:1;
		visibility:hidden;
		color:$foreground;
		background:$background;
		padding:0.75rem;
		border-radius:0.25rem;

		&::after {
			content:" ";
			position:absolute;
			border:solid $pointer-width transparent;
		}
	}

	.tooltip.top {
		margin:(-$pointer-length) 0 0 0;

		&::after {
			top:100%;
			left:50%;
			margin-left:-$pointer-width;
			border-top:solid $pointer-length $background;
		}
	}

	.tooltip.bottom {
		margin:$pointer-length 0 0 0;

		&::after {
			bottom:100%;
			left:50%;
			margin-left:(-$pointer-width);
			border-bottom:solid $pointer-length $background;
		}
	}

	.tooltip.right {
		margin:0 0 0 $pointer-length;

		&::after {
			top:50%;
			right:100%;
			margin-top:-$pointer-width;
			border-right:solid $pointer-length $background;
		}
	}

	.tooltip.left {
		margin:0 0 0 (-$pointer-length);

		&::after {
			top:50%;
			left:100%;
			margin-top:-$pointer-width;
			border-left:solid $pointer-length $background;
		}
	}
</style>

<section>
	<div class="tooltip" 
		class:top={position == "top"} 
		class:bottom={position == "bottom"} 
		class:left={position == "left"} 
		class:right={position == "right"} 
		bind:this={tooltipElement}
	>
		<svelte:component this={template} {payload} />
	</div>
</section>