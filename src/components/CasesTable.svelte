<script>
	import { focusDay, focusDayIndex, focusRegion, covidDays, filterRegion, covidSummary, covidRegions } from "../stores/datastore.js";

	let selectRegion = (region) => {
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
			text-align:left;
			padding:0.5rem;
			border-bottom:solid 1px #dadada;
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
			border-bottom-color:#959595;

			&:first-child {
				min-width:20rem;
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
					white-space:nowrap;
				}

				&:hover td {
					background-color: #d1e9ff;
					color: black; 
				}

				&.region-selected td {
					background-color:#0087ff;
					color:white;
				}

				&:last-child td {
					border-bottom-color:#959595;
				}
			}
		}
	}

	@include breakpoint-min(stacked) {
		table {
			th, td {
				display:none;
			}

			th.show, td.show {
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
					{#each $covidDays as day}
						<th class:show={day == $focusDay}>Cases on <span>{day}</span></th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each Object.entries($covidRegions) as [name, {Cases:cases, Codes:codes}]}
					{#if testFilterRegion(name)}
						<tr on:click={() => selectRegion(codes[0])} class:region-selected={codes[0] == $focusRegion}>
							<td class="show">{name}</td>
							{#each cases as count, index}
								<td class:show={index == $focusDayIndex}>{count}</td>
							{/each}
						</tr>
					{/if}
				{/each}
			</tbody>
			<tfoot>
				{#each Object.entries($covidSummary) as [name, data]}
					{#if testFilterRegion(name)}
						<tr>
							<td class="show">{name}</td>
							{#each data as count, index}
								<td class:show={index == $focusDayIndex}>{count}</td>
							{/each}
						</tr>
					{/if}
				{/each}
			</tfoot>
		</table>
	</div>
</section>
