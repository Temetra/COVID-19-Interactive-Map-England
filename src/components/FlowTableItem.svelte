<script>
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";
	
	export let name, item, caseIndex, focusRegion;

	const dispatch = createEventDispatcher();
	
	let currentCount, change, increase, decrease, same, selected;

	$: {
		currentCount = item.Cases[caseIndex];
		change = caseIndex == 0 ? currentCount : currentCount - item.Cases[Math.max(caseIndex - 1, 0)];
		increase = change > 0;
		decrease = change < 0;
		same = change == 0;
		selected = item.Codes[0] == focusRegion;
	}
</script>

<style type="text/scss">
	.item {
		font-family:"Roboto", sans-serif;
		overflow:hidden;
		break-inside:avoid;
		padding:0.5rem 0.75rem;
		border-radius:1rem;
	}

	.item:hover, .selected {
		background:#dbf8fd;
	}

	.name {
		margin:0 0 0.25rem 0; 
	}

	.count {
		margin:0 0.5rem 0 0;
	}
	
	.same { 
		display:none;
	}

	.decrease {
		color:green; 
	}

	.increase { 
		color:red;
		
		&::before {
			content:"+";
		}
	}
</style>

<div class="item" class:selected transition:fade on:click={() => dispatch("click", item.Codes[0])}>
	<div class="name">{name}</div>
	<span class="count">{currentCount}</span>
	<span class="change" class:increase class:decrease class:same>{change}</span>
</div>
