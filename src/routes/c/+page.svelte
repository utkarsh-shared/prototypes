<!-- 
  Single Call Analysis (+page.svelte)
  This page is more about layout than complex charts. No new dependencies needed.
-->
<script lang="ts">
  // --- MOCK DATA ---
  const callDetails = {
    customer: 'Quantum Leap Inc.',
    rep: 'David Miller',
    date: 'October 10, 2025',
    duration: '25m 40s',
  };

  const keyTopics = ['Pricing', 'Competitor X', 'Implementation Timeline', 'Security'];

  const actionItems = [
    'Send follow-up email with security whitepaper.',
    'Schedule technical demo for next week.',
    'Provide quote for the enterprise package.',
  ];

  const transcript = [
    { speaker: 'Rep', time: '00:15', text: "Thanks for joining today. To start, could you walk me through your current process?" },
    { speaker: 'Client', time: '00:45', text: "Sure. We're currently using a mix of spreadsheets and another tool, but it's not scaling well for us." },
    { speaker: 'Rep', time: '02:30', text: "I see. Many of our clients face that exact issue. We solve that by..." },
    { speaker: 'Client', time: '08:55', text: "That sounds interesting. How does your pricing model work?" },
    { speaker: 'Rep', time: '15:20', text: "We've discussed the value, so let's talk about the implementation timeline." },
    { speaker: 'Client', time: '18:10', text: "We are also evaluating Competitor X. How do you differ?" },
  ];
</script>

<div class="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Call Analysis: {callDetails.customer}</h1>
      <p class="text-gray-500 mt-1">
        With {callDetails.rep} on {callDetails.date} ({callDetails.duration})
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content: Player and Transcript -->
      <main class="lg:col-span-2">
        <!-- Player Simulation -->
        <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Call Recording</h3>
          <div class="bg-gray-200 h-24 flex items-center justify-center rounded-md">
            <p class="text-gray-500">[Simulated Audio Player]</p>
          </div>
           <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
        </div>
        
        <!-- Transcript -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Transcript</h3>
          <div class="space-y-4 max-h-96 overflow-y-auto pr-4">
            {#each transcript as entry}
              <div class="flex items-start space-x-3">
                <span class="flex-shrink-0 text-sm font-semibold w-16"
                      class:text-blue-600={entry.speaker === 'Rep'}
                      class:text-gray-800={entry.speaker === 'Client'}>
                  {entry.speaker}
                </span>
                <span class="text-sm text-gray-500">{entry.time}</span>
                <p class="text-gray-700">{entry.text}</p>
              </div>
            {/each}
          </div>
        </div>
      </main>

      <!-- Sidebar: Insights -->
      <aside class="lg:col-span-1 space-y-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Key Topics</h3>
          <div class="flex flex-wrap gap-2">
            {#each keyTopics as topic}
              <span class="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">{topic}</span>
            {/each}
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
          <ul class="space-y-3 list-disc list-inside text-gray-700">
            {#each actionItems as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Call Metrics</h3>
          <ul class="space-y-3">
              <li class="flex justify-between"><span class="text-gray-600">Talk/Listen Ratio:</span><span class="font-semibold text-gray-800">45% / 55%</span></li>
              <li class="flex justify-between"><span class="text-gray-600">Longest Monologue:</span><span class="font-semibold text-gray-800">1m 15s (Rep)</span></li>
              <li class="flex justify-between"><span class="text-gray-600">Questions Asked:</span><span class="font-semibold text-gray-800">12</span></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</div>

<style>
  /* Styling is handled by TailwindCSS utility classes */
</style>