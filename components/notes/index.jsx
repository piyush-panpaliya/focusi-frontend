import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../AppContext'
import Fade from 'react-reveal/Fade';


const Index = () => {
  const {state}=useContext(AppContext)
  const [note,setNote]=useState('')
  useEffect(()=>{
    const interval = setInterval(() => {
      localStorage.setItem("notes",note)
    }, 200);
    
    return () => {
      clearInterval(interval);
    };
  },[note])
  useEffect(()=>{
    setNote(localStorage.getItem("notes"))
  },[])
  return (
    <Fade right duration={900} distance="50px" when={state.UI.notes}>
    <div className='bg-[#212529]/75 rounded-lg flex flex-col h-full p-4'>
      <p className='text-2xl 2xl:text-3xl text-center mb-4'>Notes</p>
      <textarea value={note} onChange={(e)=>setNote(e.target.value)} className='2xl:text-[1.3rem] bg-[#212529] h-full p-4 overflow-y-scroll rounded-lg focus:outline-none text-white/50  w-full flex-grow'/>
    </div>
    </Fade>
  )
}

export default Index