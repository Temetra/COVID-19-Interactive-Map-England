<script>
	import { afterUpdate } from "svelte";
	import { createTimer } from "~/modules/timers.js";
	export let store;
	
	let tooltipElement, 
		position,
		target, 
		template, 
		payload,
		timer = createTimer();

	store.subscribe($store => {
		// Cancel any existing timer
		cancelTimer();
		
		// Check store state
		if ($store) {
			// Store has different target to component
			// Remove existing tooltip immediately
			if (target && target != $store.target) {
				target = template = payload = null;
			}
			
			// Component has no target
			// Show new tooltip after a delay
			if (!target) {
				scheduleDisplay($store);
			}

			// Otherwise continue showing current tooltip
		}
		else {
			// Remove tooltip after a delay
			scheduleReset();
		}
	});

	afterUpdate(() => {
		if (tooltipElement) {
			if (target) position = showTooltip(target, tooltipElement);
			else hideTooltip(tooltipElement);
		}
	});

	// Show tooltip in n millis
	function scheduleDisplay($store) {
		timer.waitFor(750).then(() => {
			position = "bottom";
			({target, template, payload} = $store);
		});
	}

	// Allow n millis for cursor to enter tooltip
	function scheduleReset() {
		timer.waitFor(50).then(() => {
			target = template = payload = null;
		});
	}

	// Cancel scheduled event
	function cancelTimer() {
		timer.cancel();
	}

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
		on:mouseenter={cancelTimer}
		on:mouseleave={scheduleReset}
	>
		<svelte:component this={template} {position} {payload} />
	</div>
</section>