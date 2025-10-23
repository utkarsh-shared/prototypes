<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

	const questions = [
		{ question: 'How does your pricing work?', times: 980 },
		{ question: 'What does the implementation process look like?', times: 750 },
		{ question: 'How do you compare to [Competitor X]?', times: 620 },
		{ question: 'What kind of support do you offer?', times: 480 },
		{ question: 'Can you explain your security measures?', times: 290 }
	];
</script>

<Card>
	<CardHeader>
		<CardTitle>Top 5 Customer Questions (Last Week)</CardTitle>
        <CardDescription>The most common questions from prospects.</CardDescription>
	</CardHeader>
	<CardContent>
		<ul class="space-y-4">
			{#each questions as item}
				<li class="flex items-center justify-between">
					<span class="text-sm">{item.question}</span>
					<span
						class="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full"
					>
						{item.times} times
					</span>
				</li>
			{/each}
		</ul>
	</CardContent>
</Card>