<script lang="ts">
  import { Radar } from 'svelte-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
  import { annualSalesData } from './data';

  ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

  const labels = ['CAC ($)', 'CLV ($)', 'Churn Rate (%)'];

  // Using the average values for the year for a summary view
  const averageCAC = annualSalesData.reduce((sum, data) => sum + data.customerSuccess.cac, 0) / annualSalesData.length;
  const averageCLV = annualSalesData.reduce((sum, data) => sum + data.customerSuccess.clv, 0) / annualSalesData.length;
  const averageChurn = annualSalesData.reduce((sum, data) => sum + data.customerSuccess.churnRate, 0) / annualSalesData.length;

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Customer Success Snapshot',
        data: [averageCAC, averageCLV, averageChurn],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Customer Success Metrics (Annual Average)',
      },
    },
  };
</script>

<div class="chart-container">
  <Radar data={chartData} options={chartOptions} />
</div>

<style>
  .chart-container {
    position: relative;
    height: 40vh;
    width: 80vw;
  }
</style>