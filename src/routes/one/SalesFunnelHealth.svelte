<script lang="ts">
  import { Line } from 'svelte-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
  import { annualSalesData } from './data';

  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

  const labels = annualSalesData.map((data) => data.month);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'New Leads',
        data: annualSalesData.map((data) => data.pipeline.newLeads),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'New Opportunities',
        data: annualSalesData.map((data) => data.pipeline.newOpportunities),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales Funnel Health',
      },
    },
  };
</script>

<div class="chart-container">
  <Line data={chartData} options={chartOptions} />
</div>

<style>
  .chart-container {
    position: relative;
    height: 40vh;
    width: 80vw;
  }
</style>