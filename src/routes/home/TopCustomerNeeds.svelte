<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

	const needs = [
		{ need: 'Desire for Improved Efficiency', mentions: 350 },
		{ need: 'Need for Better Data & Analytics', mentions: 280 },
		{ need: 'Requirement for Scalability', mentions: 195 },
		{ need: 'Demand for Enhanced Security', mentions: 153 },
		{ need: 'Request for Simplified Workflow', mentions: 100 }
	];
</script>

<Card>
	<CardHeader>
		<CardTitle>Top 5 Customer Needs Identified (Last Week)</CardTitle>
        <CardDescription>What our customers are looking to achieve.</CardDescription>
	</CardHeader>
	<CardContent>
		<ul class="space-y-4">
			{#each needs as item}
				<li class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
					<span class="text-sm font-medium text-green-800">{item.need}</span>
					<span class="text-sm font-semibold text-green-800">{item.mentions} mentions</span>
				</li>
			{/each}
		</ul>
	</CardContent>
</Card>