<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

	const objections = [
		{ text: "It's too expensive.", mentions: 310 },
		{ text: 'We are happy with our current solution.', mentions: 198 },
		{ text: "It's not a priority right now.", mentions: 125 },
		{ text: 'I need to talk to my team/boss.', mentions: 88 },
		{ text: "I don't see the value.", mentions: 31 }
	];
</script>

<Card class="bg-red-50 dark:bg-red-900/20">
	<CardHeader>
		<CardTitle class="text-red-900 dark:text-red-200">Top Sales Objections (Last Week)</CardTitle>
        <CardDescription class="text-red-700 dark:text-red-300">The most common hurdles in our sales cycle.</CardDescription>
	</CardHeader>
	<CardContent>
		<ul class="space-y-3">
			{#each objections as objection}
				<li
					class="flex items-center justify-between p-3 text-sm font-medium text-red-800 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-red-200"
				>
					"{objection.text}"
					<span class="text-xs font-semibold">{objection.mentions} mentions</span>
				</li>
			{/each}
		</ul>
	</CardContent>
</Card>