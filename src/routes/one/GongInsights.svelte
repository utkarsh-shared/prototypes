<script lang="ts">
	import { Doughnut } from "svelte-chartjs";
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
	import { annualSalesData } from "./data";

	ChartJS.register(Title, Tooltip, Legend, ArcElement);

	// Aggregating competitor mentions for the year
	const competitorMentions = annualSalesData.reduce(
		(acc, data) => {
			for (const [competitor, count] of Object.entries(data.gongInsights.competitorMentions)) {
				acc[competitor] = (acc[competitor] || 0) + count;
			}
			return acc;
		},
		{} as { [competitor: string]: number },
	);

	const competitorLabels = Object.keys(competitorMentions);
	const competitorData = Object.values(competitorMentions);

	const doughnutData = {
		labels: competitorLabels,
		datasets: [
			{
				label: "Competitor Mentions",
				data: competitorData,
				backgroundColor: [
					"rgba(255, 99, 132, 0.8)",
					"rgba(54, 162, 235, 0.8)",
					"rgba(255, 206, 86, 0.8)",
					"rgba(75, 192, 192, 0.8)",
					"rgba(153, 102, 255, 0.8)",
				],
			},
		],
	};

	const doughnutOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Competitor Mentions in Sales Calls (Annual)",
			},
		},
	};
</script>

<div class="chart-container">
	<Doughnut data={doughnutData} options={doughnutOptions} />
</div>

<style>
	.chart-container {
		position: relative;
		height: 40vh;
		width: 80vw;
	}
</style>
