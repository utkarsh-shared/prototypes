<script lang="ts">
  import TrendsTable from './components/TrendsTable.svelte';
  import TrendCard from './components/TrendCard.svelte';
  import TrendDetails from './components/TrendDetails.svelte';
  import { trendsData } from './data';
  import type { Trend } from './data';

  let selectedTrend: Trend | null = null;
  let isSheetOpen = false;

  function handleTrendSelect(trend: Trend) {
    selectedTrend = trend;
    isSheetOpen = true;
  }
</script>

<div class="container mx-auto p-4 md:p-8">
  <h1 class="text-3xl font-bold mb-4">Conversational Intelligence Trends</h1>
  <p class="text-muted-foreground mb-8">
    Insights from Customer Interactions
  </p>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">Intent Overview</h2>
    <TrendsTable data={trendsData} onRowClick={handleTrendSelect} />
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Trend Highlights</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {#each trendsData as trend}
        <TrendCard trend={trend} onClick={handleTrendSelect} />
      {/each}
    </div>
  </section>
</div>

<TrendDetails bind:open={isSheetOpen} trend={selectedTrend} />

