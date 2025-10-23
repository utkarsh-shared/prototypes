<script lang="ts">
	import * as Sheet from '@/components/ui/sheet';
	import * as Chart from '@/components/ui/chart';
	import { BarChart } from 'layerchart';
	import { scaleBand } from 'd3-scale';
	import type { Trend } from '../data';

	export let trend: Trend | null;
	export let open: boolean;

	let sentimentData: { name: string; value: number }[] | undefined;
	$: if (trend) {
		sentimentData = [
			{ name: 'Positive', value: trend.sentiment.positive },
			{ name: 'Negative', value: trend.sentiment.negative },
			{ name: 'Neutral', value: trend.sentiment.neutral }
		];
	}

	const chartConfig = {
		value: {
			label: 'Sentiment',
			color: 'hsl(var(--foreground))'
		}
	} satisfies Chart.ChartConfig;
</script>

<Sheet.Root bind:open>
	<Sheet.Content class="w-full sm:max-w-lg">
		{#if trend}
			<Sheet.Header>
				<Sheet.Title>{trend.name}</Sheet.Title>
				<Sheet.Description>{trend.intentType}</Sheet.Description>
			</Sheet.Header>
			<div class="p-4 space-y-6">
				<p class="text-muted-foreground">{trend.description}</p>
				<div>
					<h3 class="font-semibold mb-2">Sentiment Analysis</h3>
					<div class="h-64 w-full">
						{#if sentimentData}
							<Chart.Container {chartConfig}>
								<BarChart
									data={sentimentData}
									x="name"
									xScale={scaleBand().padding(0.3)}
									series={[
										{
											key: 'value',
											label: 'Sentiment Score',
											color: (d) => {
												if (d.name === 'Positive') return 'hsl(var(--primary))';
												if (d.name === 'Negative') return 'hsl(var(--destructive))';
												return 'hsl(var(--muted-foreground))';
											}
										}
									]}
								/>
							</Chart.Container>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</Sheet.Content>
</Sheet.Root>