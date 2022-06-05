import React,{useContext,useEffect} from 'react'
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
import useSWR from 'swr';
import { GET } from '../apihelper';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Graph = () => {
  const {state,setlb}=useContext(AppContext)
  const {res} = useSWR('lb',()=>GET('leaderboard/weekly'),{revalidateOnFocus:false})
  useEffect(()=>{
    if(res){
      // setlb(res.data.graphData[0].pomodoros.map(a=>{
      //   return{label:a.date,score:a.}
      // }))
      console.log(res.data)
    }
  },[res])
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
        borderColor: state.pomodoroStatus?"white":'black',
        backgroundColor: '#00A0B1',
      }
    ],
  };

  return (
    <Fade left duration={900} distance="50px"  when={state.UI.graph}>
      <div className={'  rounded-lg  h-full p-4 '+(state.pomodoroStatus?"bg-[#212529]/80 border-0":"border-black/50 border-2")}>
        <Line options={options} data={data} />
      </div>
    </Fade>
  )
}
 
export default Graph