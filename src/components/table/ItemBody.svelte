<script>
	import { focusDayIndex } from "~/stores/datastore.js";
	export let name, cases;

	let currentCount, 
		change, 
		increase, 
		decrease, 
		same;

	$: {
		// Count for region and selected day
		currentCount = cases[$focusDayIndex];

		// Change in count since previous recorded day
		change = $focusDayIndex == 0 ? currentCount : currentCount - cases[Math.max($focusDayIndex - 1, 0)];
		
		// Class style shortcuts
		increase = change > 0;
		decrease = change < 0;
		same = change == 0;
	}
</script>

<style type="text/scss">
	.name { margin:0 0 0.25rem 0; }
	.count { margin:0 0.5rem 0 0; }
	.same { display:none; }
	.decrease { color:green; }
	.increase { 
		color:red;
		&::before { content:"+"; }
	}
</style>

<div class="name">{name}</div>
<span class="count">{currentCount.toLocaleString()}</span>
<span class:increase class:decrease class:same>{change}</span>
