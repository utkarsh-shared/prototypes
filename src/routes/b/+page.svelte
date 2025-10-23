<!-- 
  Individual Rep Dashboard (+page.svelte)
  Dependencies to install:
  npm install apexcharts svelte-chart-apex
  npm install -D @types/apexcharts
-->
<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import type { ApexOptions } from 'apexcharts';

  // --- MOCK DATA ---
  const repName = 'Sarah Jones';

  const repStats = {
    quotaAttainment: '115%',
    avgDealSize: '$22,500',
    callsThisWeek: 42,
    talkToListenRatio: '65%',
  };

  const upcomingTasks = [
    { task: 'Follow up with Quantum Leap Inc.', due: 'Today', type: 'call' },
    { task: 'Send proposal to Innovate Solutions', due: 'Tomorrow', type: 'email' },
    { task: 'Prep for demo with NextGen Systems', due: 'Wednesday', type: 'task' },
  ];

  const recentCalls = [
      { customer: 'Stellar Corp', sentiment: 'Positive', duration: '12m 45s' },
      { customer: 'Apex Industries', sentiment: 'Neutral', duration: '8m 10s' },
      { customer: 'Zenith Group', sentiment: 'Positive', duration: '15m 30s' },
  ];

  // --- CHART CONFIG ---
  let Chart: any;

  const quotaOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: { show: true, fontSize: '22px', },
          value: { show: true, fontSize: '16px', },
        },
      },
    },
    labels: ['Quota Attainment'],
    colors: ['#10b981'],
  };
  const quotaSeries = [85]; // Corresponds to 85% attainment

  const sentimentOptions: ApexOptions = {
      chart: { type: 'pie', height: 350 },
      labels: ['Positive', 'Neutral', 'Negative'],
      colors: ['#22c55e', '#f59e0b', '#ef4444'],
      legend: { position: 'bottom' },
  };
  const sentimentSeries = [68, 22, 10]; // % of calls

  onMount(async () => {
    if (browser) {
      const module = await import('svelte-apexcharts');
      Chart = module.default;
    }
  });
</script>

<div class="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Welcome back, {repName}!</h1>
      <p class="text-gray-500 mt-1">Here's your performance snapshot.</p>
    </header>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {#each Object.entries(repStats) as [key, value]}
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
          <p class="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
      {/each}
    </div>

    <!-- Charts and Tasks -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div class="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Quota Attainment</h3>
         {#if Chart}
          <svelte:component this={Chart} options={quotaOptions} series={quotaSeries} type="radialBar" height={320} />
        {/if}
      </div>
      <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
        <ul class="space-y-4">
            {#each upcomingTasks as task}
                <li class="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100">
                    <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full"
                         class:bg-blue-100={task.type === 'call'}
                         class:bg-green-100={task.type === 'email'}
                         class:bg-yellow-100={task.type === 'task'}>
                        <!-- Simple icons -->
                        {#if task.type === 'call'}📞{:else if task.type === 'email'}📧{:else}📝{/if}
                    </div>
                    <div class="flex-1">
                        <p class="text-gray-800 font-medium">{task.task}</p>
                        <p class="text-sm text-gray-500">Due: {task.due}</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">✓</button>
                </li>
            {/each}
        </ul>
      </div>
    </div>
    
    <!-- Recent Calls Table -->
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Call Analysis</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="text-sm text-gray-500 border-b">
              <th class="py-2 px-4 font-medium">Customer</th>
              <th class="py-2 px-4 font-medium">Call Sentiment</th>
              <th class="py-2 px-4 font-medium">Duration</th>
              <th class="py-2 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each recentCalls as call}
              <tr class="border-b last:border-0 hover:bg-gray-50">
                <td class="py-3 px-4 text-gray-800 font-medium">{call.customer}</td>
                <td class="py-3 px-4">
                  <span class="px-2 py-1 text-xs rounded-full"
                        class:bg-green-100={call.sentiment === 'Positive'} class:text-green-800={call.sentiment === 'Positive'}
                        class:bg-yellow-100={call.sentiment === 'Neutral'} class:text-yellow-800={call.sentiment === 'Neutral'}>
                    {call.sentiment}
                  </span>
                </td>
                <td class="py-3 px-4 text-gray-600">{call.duration}</td>
                <td class="py-3 px-4">
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Analysis</a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<style>
  /* Styling is handled by TailwindCSS utility classes */
</style>