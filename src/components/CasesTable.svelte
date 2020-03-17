<script>
	import { focusDay, focusDayIndex, focusRegion, availableDays, filterRegion, covidData } from "../stores/datastore.js";

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

		th {
			font-weight:normal;
			text-align:left;
			padding-bottom:0.5rem;
			box-shadow: 0 1px 0px 0px #ccc;
			position:-webkit-sticky;
			position:sticky;
			top:0;
			background-color:white;
		}

		th:not(:first-child) {
			padding-left:0.5rem;
			padding-right:0.5rem;

			span {
				white-space:nowrap;
			}
		}

		tbody, tfoot {
			td {
				padding:0.5rem 0.25rem;
				border-bottom:solid 1px #dadcde;
			}
		}

		tbody {
			tr:hover {
				background-color:#dadcde;
			}

			tr.region-selected {
				background-color:#6c757d;
				color:white;
				
				&:hover {
					background-color:#5a6268;
				}
			}

			td:first-child {
				white-space:nowrap;
			}

			td {
				cursor: pointer;
			}
		}

		tfoot {
			tr:first-child {
				border-top:solid 2px #666;
			}
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
						<th class:show={day == $focusDay}>Cases on <span>{day}</span></th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#if $covidData}
					{#each Object.entries($covidData.CasesByRegion) as [name, data]}
						{#if testFilterRegion(name)}
							<tr on:click={() => selectRegion(name)} class:region-selected={name == $focusRegion}>
								<td class="show">{name}</td>
								{#each data as count, index}
									<td class:show={index == $focusDayIndex}>{count}</td>
								{/each}
							</tr>
						{/if}
					{/each}
				{/if}
			</tbody>
			<tfoot>
				{#if $covidData}
					{#each Object.entries($covidData.Summary) as [name, data]}
						{#if testFilterRegion(name)}
							<tr>
								<td class="show">{name}</td>
								{#each data as count, index}
									<td class:show={index == $focusDayIndex}>{count}</td>
								{/each}
							</tr>
						{/if}
					{/each}
				{/if}
			</tfoot>
		</table>
	</div>
</section>
