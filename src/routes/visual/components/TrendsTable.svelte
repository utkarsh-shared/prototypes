<script lang="ts">
  import * as Table from "@/components/ui/table";
  import { trendsData, type Trend } from "../data";

  export let data: Trend[];
  export let onRowClick: (trend: Trend) => void;
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>Intent Type</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head class="text-right">Volume</Table.Head>
      <Table.Head class="text-right">Trend</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each data as trend}
      <Table.Row onclick={() => onRowClick(trend)} class="cursor-pointer">
        <Table.Cell>{trend.intentType}</Table.Cell>
        <Table.Cell>{trend.name}</Table.Cell>
        <Table.Cell class="text-right">{trend.volume}</Table.Cell>
        <Table.Cell 
		class="text-right" >
          {trend.trend > 0 ? '▲' : '▼'} {Math.abs(trend.trend)}%
        </Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>