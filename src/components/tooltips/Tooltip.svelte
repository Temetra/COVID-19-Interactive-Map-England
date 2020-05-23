<script>
	import { afterUpdate } from "svelte";
	export let store;
	
	let tooltipElement, 
		position,
		target, 
		template, 
		payload,
		timerRef;

	// Tooltip is removed when store is cleared
	// Tooltip element has mouse events to prevent clearing
	$: {
		if ($store) {
			cancelReset();
			({target, template, payload} = $store);
		}
		else if (target) {
			scheduleReset();
		}
	}

	// Allow 50ms for cursor to enter tooltip
	function scheduleReset() {
		timerRef = timerRef || setTimeout(() => {
			timerRef = null;
			target = template = payload = null;
		}, 50);
	}

	// Cancel scheduled reset
	function cancelReset() {
		clearTimeout(timerRef);
		timerRef = null;
	}

	// Move tooltip after content is mounted
	afterUpdate(() => {
		if (tooltipElement) {
			if (target) position = showTooltip(target, tooltipElement);
			else hideTooltip(tooltipElement);
		}
	});

	function showTooltip(targetElement, tooltipElement) {
		// Get size of elements
		let targetRect = targetElement.getBoundingClientRect();
		let tooltipRect = tooltipElement.getBoundingClientRect();

		// Compute tooltip position
		let position = "bottom";
		let top = targetRect.top + targetRect.height + window.scrollY;

		// Check if content extends past page, reverse position if so
		if (top + tooltipRect.height - window.scrollY >= window.innerHeight) {
			position = "top";
			top = targetRect.top - tooltipRect.height + window.scrollY;
		}

		// Show tooltip
		tooltipElement.style.visibility = "visible";
		tooltipElement.style.top = `${top}px`;
		tooltipElement.style.left = `${targetRect.left}px`;

		// Return calculated position
		return position;
	}

	function hideTooltip(tooltipElement) {
		tooltipElement.style.visibility = "hidden";
		tooltipElement.style.top = "0px";
		tooltipElement.style.left = "0px";
	}
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
		z-index:500;
		position:absolute;
		visibility:hidden;
		display: grid;
		grid-template-areas:
			"arrow"
			"content";
	}

	.tooltip.top {
		grid-template-areas:
			"content"
			"arrow";
	}

	.arrow {
		grid-area:arrow;
		width:$pointer-width;
		margin:(-$pointer-length) 0 0 1rem;
		border:solid $pointer-width transparent;
		border-bottom:solid $pointer-length $background;
	}

	.top .arrow {
		margin:0 0 (-$pointer-length) 1rem;
		border:solid $pointer-width transparent;
		border-top:solid $pointer-length $background;
	}

	.content {
		grid-area:content;
		color:$foreground;
		background:$background;
		padding:0.75rem;
		border-radius:0.25rem;
	}
</style>

<section>
	<div 
		class="tooltip" 
		class:top={position == "top"} 
		bind:this={tooltipElement}
		on:mouseenter={cancelReset}
		on:mouseleave={scheduleReset}
	>
		<div class="arrow"></div>
		<div class="content"><svelte:component this={template} {payload} /></div>
	</div>
</section>