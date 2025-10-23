<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

	const painPoints = [
		{ name: 'High Cost / Budget Constraints', mentions: 450 },
		{ name: 'Integration Complexity', mentions: 320 },
		{ name: 'Lack of Specific Features', mentions: 215 },
		{ name: 'Poor User Experience', mentions: 180 },
		{ name: 'Time-consuming Implementation', mentions: 119 }
	];

    const totalMentions = painPoints.reduce((sum, p) => sum + p.mentions, 0);
</script>

<Card>
	<CardHeader>
		<CardTitle>Top 5 Customer Pain Points (Last Week)</CardTitle>
        <CardDescription>Understanding what troubles our prospects most.</CardDescription>
	</CardHeader>
	<CardContent class="space-y-4">
		{#each painPoints as point}
			<div class="grid gap-2">
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium">{point.name}</span>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						{point.mentions} mentions
					</span>
				</div>
				<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
					<div
						class="bg-blue-600 h-2.5 rounded-full"
						style="width: {(point.mentions / totalMentions) * 100}%"
					></div>
				</div>
			</div>
		{/each}
	</CardContent>
</Card>