<script lang="ts">
  import { Bar } from 'svelte-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  import { annualSalesData } from './data';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  const labels = annualSalesData.map((data) => data.month);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Revenue ($)',
        data: annualSalesData.map((data) => data.totalRevenue),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
      {
        label: 'Average Deal Size ($)',
        data: annualSalesData.map((data) => data.averageDealSize),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
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
        text: 'Sales Performance Overview',
      },
    },
  };
</script>

<div class="chart-container">
  <Bar data={chartData} options={chartOptions} />
</div>

<style>
  .chart-container {
    position: relative;
    height: 40vh;
    width: 80vw;
  }
</style>