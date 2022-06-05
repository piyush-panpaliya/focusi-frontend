import React,{useContext} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Fade from 'react-reveal/Fade';
import { AppContext } from '../AppContext';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Graph = () => {
  const {state}=useContext(AppContext)
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
        borderColor: 'black',
        backgroundColor: '#00A0B1',
      }
    ],
  };

  return (
    <Fade left duration={900} distance="50px"  when={state.UI.graph}>
      <div className='border-2 border-black/50 rounded-lg  h-full p-4 '>
        <Line options={options} data={data} />
      </div>
    </Fade>
  )
}
 
export default Graph