import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Graph = () => {
  
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        grid:{
          drawBorder:false
        }
      },
      y: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        display:false
      }
    }
  };
  const labels = ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'];

  const data = {
    labels,
    datasets: [
      {
        data: [35,41,55,22,33,54,34],
        borderColor: '#00A0B1',
        backgroundColor: '#00A0B1',
      }
    ],
  };

  return (
    <div className='border-2 border-white/50 rounded-lg  h-[30vh] p-4 '>
      <Line options={options} data={data} />
    </div>
  )
}
 
export default Graph