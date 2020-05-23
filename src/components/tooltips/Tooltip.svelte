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
	store.subscribe($store => {
		if ($store) {
			// Stop scheduled tooltip removal
			cancelReset();
			// Default to "bottom" so dynamic component has base style to work with
			position = "bottom";
			// Copy refs to store content
			({target, template, payload} = $store);
		}
		else if (target) {
			scheduleReset();
		}
	});

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

		// Get tooltip position
		let containsTop = tooltipElement.firstElementChild.classList.contains("top");
		let pastViewport = targetRect.bottom + tooltipRect.height >= window.innerHeight;
		let position = containsTop || pastViewport ? "top" : "bottom";
		
		// Calculate top
		let top = 0;
		if (position == "top") top = targetRect.top - tooltipRect.height + window.scrollY;
		else top = targetRect.top + targetRect.height + window.scrollY;

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

	.tooltip {
		z-index:500;
		position:absolute;
		visibility:hidden;
	}
</style>

<section>
	<div 
		class="tooltip" 
		bind:this={tooltipElement}
		on:mouseenter={cancelReset}
		on:mouseleave={scheduleReset}
	>
		<svelte:component this={template} {position} {payload} />
	</div>
</section>