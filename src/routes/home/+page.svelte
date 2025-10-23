<script lang="ts">
  import Hero from "./Hero.svelte";
  import WeeklyMetrics from "./WeeklyMetrics.svelte";
  import TopPainPoints from "./TopPainPoints.svelte";
  import TopCustomerQuestions from "./TopCustomerQuestions.svelte";
  import TopCustomerNeeds from "./TopCustomerNeeds.svelte";
  import TopCustomerPraises from "./TopCustomerPraises.svelte";
  import TopSalesObjections from "./TopSalesObjections.svelte";
</script>

<div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
  <main class="flex-1">
    <!-- <Hero /> -->
    <WeeklyMetrics />
    <div class="container px-4 md:px-6 py-8">
      <div class="grid gap-8">
        <div class="grid md:grid-cols-2 gap-8">
          <TopPainPoints />
          <TopCustomerQuestions />
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <TopCustomerNeeds />
          <TopCustomerPraises />
        </div>
        <TopSalesObjections />
      </div>
    </div>
  </main>
</div>