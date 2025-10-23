<!-- 
  Team Performance Dashboard (+page.svelte) - Svelte 5 Compatible
  Dependencies to install:
  npm install apexcharts
  npm install -D @types/apexcharts
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { ApexOptions } from 'apexcharts';
  import ApexCharts from 'apexcharts';

  // --- CHART ELEMENTS ---
  let winLossChartEl: HTMLElement;
  let teamActivityChartEl: HTMLElement;
  let winLossChart: ApexCharts;
  let teamActivityChart: ApexCharts;

  // --- MOCK DATA (Unchanged) ---
  const teamStats = {
    totalCalls: 1245,
    avgCallDuration: '8m 15s',
    totalDealsClosed: 78,
    winRate: '23%',
  };

  const leaderboard = [
    { name: 'Sarah Jones', dealsClosed: 12, talkRatio: 65, avgDuration: '9m 30s' },
    { name: 'Michael Chen', dealsClosed: 10, talkRatio: 58, avgDuration: '7m 45s' },
    { name: 'Priya Patel', dealsClosed: 9, talkRatio: 72, avgDuration: '11m 05s' },
    { name: 'David Miller', dealsClosed: 8, talkRatio: 55, avgDuration: '6m 20s' },
  ];

  const dealsAtRisk = [
    { name: 'Quantum Leap Inc.', rep: 'David Miller', issue: 'Competitor Mentioned', lastActivity: '3 days ago' },
    { name: 'Innovate Solutions', rep: 'Priya Patel', issue: 'Low Engagement', lastActivity: '5 days ago' },
    { name: 'NextGen Systems', rep: 'Michael Chen', issue: 'Pricing Objections', lastActivity: '2 days ago' },
  ];

  // --- CHART CONFIG (Unchanged) ---
  const winLossOptions: ApexOptions = {
    series: [78, 45, 180],
    chart: { type: 'donut', height: 350, toolbar: { show: false } },
    labels: ['Deals Won', 'Deals Lost', 'In Pipeline'],
    colors: ['#22c55e', '#ef4444', '#3b82f6'],
    legend: { position: 'bottom' },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: { width: 200 },
        legend: { position: 'bottom' }
      }
    }]
  };

  const teamActivityOptions: ApexOptions = {
    series: [
      { name: 'Calls', data: [44, 55, 41, 67] },
      { name: 'Emails', data: [53, 32, 33, 52] },
      { name: 'Meetings', data: [12, 17, 11, 9] }
    ],
    chart: { type: 'bar', height: 350, stacked: true, toolbar: { show: false } },
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
    yaxis: { title: { text: 'Number of Activities' } },
    plotOptions: { bar: { horizontal: false } },
    legend: { position: 'top' },
    colors: ['#3b82f6', '#60a5fa', '#a5b4fc']
  };

  onMount(() => {
    // Manually create and render charts on component mount
    winLossChart = new ApexCharts(winLossChartEl, winLossOptions);
    teamActivityChart = new ApexCharts(teamActivityChartEl, teamActivityOptions);
    winLossChart.render();
    teamActivityChart.render();
  });

  onDestroy(() => {
    // Clean up charts when component is destroyed to prevent memory leaks
    if (winLossChart) {
      winLossChart.destroy();
    }
    if (teamActivityChart) {
      teamActivityChart.destroy();
    }
  });
</script>

<div class="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Team Performance Dashboard</h1>
      <p class="text-gray-500 mt-1">Q4 2025 Overview</p>
    </header>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {#each Object.entries(teamStats) as [key, value]}
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
          <p class="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
      {/each}
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Deal Outcomes</h3>
        <div bind:this={winLossChartEl}></div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Weekly Team Activity</h3>
        <div bind:this={teamActivityChartEl}></div>
      </div>
    </div>
    
    <!-- Tables Row (Unchanged) -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <!-- Leaderboard -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Rep Leaderboard</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="text-sm text-gray-500 border-b">
                            <th class="py-2 px-4 font-medium">Rep Name</th>
                            <th class="py-2 px-4 font-medium">Deals Closed</th>
                            <th class="py-2 px-4 font-medium">Talk Ratio (%)</th>
                            <th class="py-2 px-4 font-medium">Avg. Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each leaderboard as rep}
                            <tr class="border-b last:border-0 hover:bg-gray-50">
                                <td class="py-3 px-4 text-gray-800 font-medium">{rep.name}</td>
                                <td class="py-3 px-4 text-gray-600">{rep.dealsClosed}</td>
                                <td class="py-3 px-4 text-gray-600">{rep.talkRatio}</td>
                                <td class="py-3 px-4 text-gray-600">{rep.avgDuration}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Deals at Risk -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Deals at Risk</h3>
             <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="text-sm text-gray-500 border-b">
                            <th class="py-2 px-4 font-medium">Account</th>
                            <th class="py-2 px-4 font-medium">Rep</th>
                            <th class="py-2 px-4 font-medium">Issue</th>
                            <th class="py-2 px-4 font-medium">Last Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each dealsAtRisk as deal}
                            <tr class="border-b last:border-0 hover:bg-gray-50">
                                <td class="py-3 px-4 text-gray-800 font-medium">{deal.name}</td>
                                <td class="py-3 px-4 text-gray-600">{deal.rep}</td>
                                <td class="py-3 px-4"><span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{deal.issue}</span></td>
                                <td class="py-3 px-4 text-gray-600">{deal.lastActivity}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</div>