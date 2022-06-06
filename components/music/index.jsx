import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../AppContext';

const tracks = [
  "1281543052",
  "1281543043",
  "1281543004",
  "1281542518",
  "1141510192",
  "1281542917",
  "1281542914",
  "1281542497",
  "1281542851",
  "1281542812",
  ,"1056696814",
  "1281542527",
  "1281542761",
  "1281542650",
  "1281542659",
  "1281542593",
  "1281542608",
  "1281542575",
  "1056680920",
  "1088692933"

];

const Index = () => {
  const {state}=useContext(AppContext)
  const [astate,setState]=useState( Math.ceil(Math.random() *20)  )
  const handle=(a)=>{
    if(a==="plus"){
      astate===tracks.length-1?null:setState(p=>p+1)
      console.log(astate)
    } else{
      astate<=0?null:setState(p=>p-1)
    }
  }
  useEffect(()=>{},[astate])
  return (
    <div className='flex justify-center w-full mt-2'>
      <div className='rounded-xl bg-[#212529]/[10%] backdrop-blur-sm h-[23vh] flex items-center justify-between gap-x-2 py-3 px-5 2xl:py-8'>

      <button disabled={astate===0} onClick={()=>handle("minus")}><img draggable={false}  src='/svg/left.svg' className='w-6 lg:w-8'/></button>
      <iframe className='rounded-xl bg-transparent h-[80%] w-[65%] lg:h-[90%]'  scrolling="no" frameBorder="no" allow="autoplay" 
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${tracks[astate]}&color=%231a1a2c&auto_play=${state.pomodoroStatus}&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}/>
      <button disabled={astate===(tracks.length-1)} onClick={()=>handle("plus")}><img draggable={false}  src='/svg/right.svg' className='w-6 lg:w-8'/></button>
      </div>
    </div>
  )
}

export default Index