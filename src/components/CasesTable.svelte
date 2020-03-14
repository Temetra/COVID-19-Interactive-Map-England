<script>
	import { focusDay, focusRegion, availableDays, filterRegion, covidData } from "../stores/datastore.js";

	var selectRegion = (region) => {
		if (region == $focusRegion) focusRegion.set("");
		else focusRegion.set(region);
	};

	$: testFilterRegion = (key) => {
		return $filterRegion == null || 
			$filterRegion.length < 1 || 
			key.toUpperCase().includes($filterRegion.toUpperCase());
	};
</script>

<style type="text/scss">
	@import "../scss/shared";

	section {
		grid-area:data;
		display:flex;
		flex-direction:column;
		margin:2rem 1rem 0 1rem;
	}

	.tablecontainer {
		height:100%;
		overflow: auto;
	}

	table {
		width: 100%; 
		border-collapse: collapse;

		th, td {
			display:none;
		}

		thead {
			position:-webkit-sticky;
			position:sticky;
			top:0;
			background-color:white;
		}

		th {
			font-weight:normal;
			text-align:left;
			padding-bottom:0.5rem;
			border-bottom:solid 1px #bbb;
		}

		th:not(:first-child) {
			width:1px;
			white-space:nowrap;
			padding-left:0.5rem;
			padding-right:0.5rem;
		}

		tbody {
			tr:hover {
				background-color:rgb(221, 241, 253);
			}

			td {
				padding:0.5rem 0.25rem;
				border-bottom:solid 1px #ddd;
				cursor: pointer;
			}
		}

		tr:first-child td {
			padding-top:0.5rem;
		}

		th + th, td + td {
			text-align:center;
		}

		th.show, td.show {
			display:table-cell;
		}
	}

	@media only screen and (max-width: $breakpoint) {
		table {
			th, td {
				display:table-cell;
			}
		}
	}
</style>

<section>
	<h2>Confirmed cases by Upper Tier Local Authority</h2>
	<div class="tablecontainer">
		<table>
			<thead>
				<tr>
					<th class="show">UTLA</th>
					{#each $availableDays as day}
						<th class:show={day == $focusDay}>Cases on {day}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#if $covidData}
				{#each Object.entries($covidData) as [key, value]}
				{#if testFilterRegion(key)}
					<tr on:click={() => selectRegion(key)}>
						<td class="show">{key}</td>
						{#each Object.entries(value) as [day, count]}
							<td class:show={day == $focusDay}>{count}</td>
						{/each}
					</tr>
				{/if}
				{/each}
				{/if}
			</tbody>
		</table>
	</div>
</section>
