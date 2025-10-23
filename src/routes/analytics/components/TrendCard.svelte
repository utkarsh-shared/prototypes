<script lang="ts">
	import { LineChart } from 'layerchart';
	import { scaleUtc } from 'd3-scale';
	import * as Chart from '@/components/ui/chart';
	import * as Card from '@/components/ui/card';
	import type { Trend } from '../data';

	export let trend: Trend;
	export let onClick: (trend: Trend) => void;

	const chartConfig = {
		volume: {
			label: 'Volume',
			color: trend.trend > 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'
		}
	} satisfies Chart.ChartConfig;
</script>

<Card.Root on:click={() => onClick(trend)} class="cursor-pointer transition-all hover:bg-muted/50">
	<Card.Header>
		<Card.Title>{trend.name}</Card.Title>
		<Card.Description>{trend.intentType}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="h-40 w-full">
			<Chart.Container {chartConfig}>
				<LineChart
					data={trend.history}
					x="date"
					xScale={scaleUtc()}
					series={[
						{
							key: 'volume',
							label: 'Volume',
							color: chartConfig.volume.color
						}
					]}
					props={{
						xAxis: {
							ticks: 3,
							format: (v: Date) => v.toLocaleDateString('en-US', { month: 'short' })
						},
						yAxis: {
							ticks: 4
						}
					}}
				>
					{#snippet tooltip()}
						<Chart.Tooltip indicator="dot" />
					{/snippet}
				</LineChart>
			</Chart.Container>
		</div>
	</Card.Content>
</Card.Root>