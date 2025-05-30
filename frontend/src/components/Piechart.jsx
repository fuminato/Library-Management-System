// src/components/PieChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ['Borrowed Books', 'Returned Books'],
    datasets: [{
      data: [600, 900],
      backgroundColor: ['#60A5FA', '#4B5563'],
    }]
  };

  return <Pie data={data} />;
}