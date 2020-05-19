<script>
	import { afterUpdate } from "svelte";
	export let source;
	let tooltip, position;

	function calculateCoords(position, targetRect, tooltipRect) {
		let top, left;

		switch (position) {
			case "top":
				top = targetRect.top - tooltipRect.height;
				left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
				break;
			case "bottom":
				top = targetRect.top + targetRect.height;
				left = targetRect.left + targetRect.width/2 - tooltipRect.width/2;
				break;
			case "right":
				top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
				left = targetRect.right;
				break;
			case "left":
				top = targetRect.top + targetRect.height/2 - tooltipRect.height/2;
				left = targetRect.left - tooltipRect.width;
				break;
		}

		return { top, left };
	}

	// Move tooltip after content is mounted
	afterUpdate(() => {
		if (tooltip) {
			if (source) {
				// Default tooltip position
				position = "bottom";

				// Get size of elements
				let targetRect = source.target.getBoundingClientRect();
				let tooltipRect = tooltip.getBoundingClientRect();

				// Get computed size of arrow
				let afterContent = window.getComputedStyle(tooltip, ":after");
				let afterSize = parseInt(afterContent.getPropertyValue("border-bottom-width"), 10);

				// Compute tooltip position
				let coords = calculateCoords(position, targetRect, tooltipRect);

				// Todo: Check if content extends past page, reverse position if so
				if (coords.left <= 0) {
					position = "right";
					coords = calculateCoords(position, targetRect, tooltipRect);
				}
				else if (afterSize + coords.top + tooltipRect.height >= window.innerHeight) {
					position = "top";
					coords = calculateCoords(position, targetRect, tooltipRect);
				}

				// Show tooltip
				tooltip.style.visibility = "visible";
				tooltip.style.top = `${coords.top}px`;
				tooltip.style.left = `${coords.left}px`;
			}
			else {
				// Hide tooltip
				tooltip.style.visibility = "hidden";
			}
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
		z-index:1000;
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
		bind:this={tooltip}
	>
		<svelte:component this={source ? source.template : null} payload={source ? source.payload : null}/>
	</div>
</section>