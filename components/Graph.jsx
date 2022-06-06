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
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const Graph = () => {
  const {state}=useContext(AppContext)
  const [graph,setGraph]=React.useState([])
  useSWR('lb',async()=>{
    const res=await GET('pomodoro/status/weekly')
    if(res.status===200){
      setGraph(res.data.graphData.map(a=>{
        return {label:a.date,score:a.workEfficiency}
      }))
    }
  },{revalidateOnFocus:true})

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
  const labels = graph&& graph.length>1?graph.map(a=>{
    const date=new Date(a.label)
    return (date.getDate(),10?"0"+date.getDate():date.getDate())+"/"+monthNames[date.getMonth()]
  }): ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'];
  const datas = graph&& graph.length>1?graph.map(a=>a.score): ["50", "55", "50", "55", "50", "55", "50"];
  const data = {
    labels,
    datasets: [
      {
        data: datas,
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