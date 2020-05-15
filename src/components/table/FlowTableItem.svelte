<script>
	import { fade } from "svelte/transition";

	export let name, cases, codes = null, focusDayIndex, focusRegion = null;
	
	let currentCount, change, increase, decrease, same, selected, tooltip;

	$: {
		// Count for region and selected day
		currentCount = cases[focusDayIndex];

		// Change in count since previous recorded day
		change = focusDayIndex == 0 ? currentCount : currentCount - cases[Math.max(focusDayIndex - 1, 0)];
		
		// Class style shortcuts
		increase = change > 0;
		decrease = change < 0;
		same = change == 0;
		selected = (codes && codes[0] == focusRegion);
	}

	function positionTooltip(event) {
		if (tooltip.innerHTML) {
			var targetRect = event.target.getBoundingClientRect();
			tooltip.style.top = `${targetRect.top + targetRect.height}px`;
			tooltip.style.left = `${targetRect.left}px`;
			tooltip.style.maxWidth = `${targetRect.width}px`;
		}
	}
</script>

<style type="text/scss">
	@import "shared";

	.item {
		font-family:"Roboto", sans-serif;
		overflow:hidden;
		break-inside:avoid;
		padding:0.5rem 0.75rem;
		border-radius:1rem;

		@include on-hover {
			.tooltip { visibility:visible; }
		}
	}

	.selectable {
		cursor:pointer;
		@include on-hover { background:#dbf8fd; }
	}

	.selected { background:#dbf8fd; }
	.name { margin:0 0 0.25rem 0; }
	.count { margin:0 0.5rem 0 0; }
	.same { display:none; }
	.decrease { color:green; }

	.increase { 
		color:red;
		&::before { content:"+"; }
	}

	.tooltip {
		z-index:1000;
		position:absolute;
		visibility:hidden;
		color:white;
		background:black;
		padding:0.75rem;
		margin:0.5rem 0 0 0;
		border-radius:0.25rem;

		&::after {
			content:" ";
			position:absolute;
			bottom:100%;
			left:1.5rem;
			margin-left:-0.5rem;
			border:solid 0.5rem;
			border-color:transparent transparent black transparent;
		}
	}
</style>

<div class="item" 
	class:selectable={codes} 
	class:selected 
	transition:fade 
	on:click 
	on:mouseenter={positionTooltip}>
	<div class="name">{name}</div>
	<span class="count">{currentCount}</span>
	<span class="change" class:increase class:decrease class:same>{change}</span>
	<div class="tooltip" bind:this={tooltip}><slot /></div>
</div>
