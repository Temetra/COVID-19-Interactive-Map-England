<script>
	import { fade } from "svelte/transition";

	export let name, 
		cases, 
		codes = null, 
		focusDayIndex, 
		focusRegion = null,
		title = null;
	
	let currentCount, 
		change, 
		increase, 
		decrease, 
		same, 
		selected;

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
</script>

<style type="text/scss">
	@import "shared";

	.item {
		font-family:"Roboto", sans-serif;
		overflow:hidden;
		break-inside:avoid;
		padding:0.5rem 0.75rem;
		border-radius:1rem;
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
</style>

<div class="item" {title}
	class:selectable={codes}
	class:selected 
	transition:fade 
	on:click>
	<div class="name">{name}</div>
	<span class="count">{currentCount}</span>
	<span class="change" class:increase class:decrease class:same>{change}</span>
</div>
