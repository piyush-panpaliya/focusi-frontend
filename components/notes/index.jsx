import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../AppContext'
import Fade from 'react-reveal/Fade';


const Index = () => {
  const {state,setnotes}=useContext(AppContext)
  const [note,setNote]=useState("")
  useEffect(()=>{
    if (note===""){
      setNote(JSON.parse(localStorage.getItem("data")).notes)
    }
    const interval = setInterval(() => {
      setnotes(note)
    }, 200);

    return () => {
      clearInterval(interval);
    };
  },[note])
  return (
    <Fade right duration={900} distance="50px" when={state.UI.notes}>
    <div className='bg-[#212529]/75 rounded-lg flex flex-col h-full p-4'>
      <p className='text-2xl text-center mb-4'>Notes</p>
      <textarea value={note} onChange={(e)=>setNote(e.target.value)} className='bg-[#212529] p-4 overflow-y-scroll rounded-lg focus:outline-none text-white/50  w-full flex-grow'/>
    </div>
    </Fade>
  )
}

export default Index