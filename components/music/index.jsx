import React,{useState,useEffect,useRef} from 'react'

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
  const [state,setState]=useState(0)
  const handle=(a)=>{
    if(a==="plus"){
      state===tracks.length-1?null:setState(p=>p+1)
      console.log(state)
    } else{
      state<=0?null:setState(p=>p-1)
    }
  }
  useEffect(()=>{},[state])
  return (
    <div className='flex justify-center w-full mt-2'>
      <div className='rounded-xl border-white/50 border-4  h-[23vh] flex items-center justify-between gap-x-2 p-2'>

      <button disabled={state===0} onClick={()=>handle("minus")}><img src='/svg/left.svg' className='w-6 lg:w-8'/></button>
      <iframe className='rounded-xl bg-transparent h-[85%] w-[70%] lg:h-full'  scrolling="no" frameBorder="no" allow="autoplay" 
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${tracks[state]}&color=%231a1a2c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}/>
      <button disabled={state===(tracks.length-1)} onClick={()=>handle("plus")}><img src='/svg/right.svg' className='w-6 lg:w-8'/></button>
      </div>
    </div>
  )
}

export default Index