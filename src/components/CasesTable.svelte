<script>
	import { focusDay, focusDayIndex, focusRegion, availableDays, filterRegion, covidData } from "../stores/datastore.js";

	var selectRegion = (region) => {
		if (region == $focusRegion) focusRegion.set(null);
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
		width:100%; 
		border-collapse:separate;
		border-spacing:0;

		th, td {
			display:none;
			text-align:left;
			padding:0.5rem;
			border-bottom:solid 1px #dadada;
		}

		th.show, td.show {
			display:table-cell;
		}

		th + th, td + td {
			text-align:center;
		}

		th {
			font-weight:normal;
			position:-webkit-sticky;
			position:sticky;
			top:0;
			background-color:white;
			border-color:#c0c0c0;

			&:first-child {
				border-left:solid 2px white; 
			}

			span {
				white-space:nowrap;
			}
		}

		tbody {
			tr {
				td {
					cursor: pointer;
				}

				td:first-child {
					border-left:solid 2px white; 
					white-space:nowrap;
				}

				&:hover td {
					background-color: #f0f0f0;
					color: black; 
				}

				&:hover td:first-child {
					border-left: solid 2px #0087ff; 
				}

				&.region-selected td {
					background-color:#0087ff;
					color:white;
				}
				
				&.region-selected:hover td {
					background-color:#0087ff66;
					color:black;
				}

				&:last-child td {
					border-bottom-color:#c0c0c0;
				}
			}
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
