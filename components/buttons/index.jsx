import React,{useContext} from 'react'
import { AppContext } from '../../AppContext'
const index = () => {
  const {setUI,state,setps,setallUI}=useContext(AppContext)
  const handler=(a)=>{
    setUI(a,!(state.UI[a]))
    // setallUI()
  }
  return (
    <div className='flex gap-5 justify-center'>
    <button onClick={()=>handler("graph")} className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/efficiency.svg' className=' w-12'/></button>
    <button onClick={()=>handler("lb")} className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/lb.svg' className=' w-10'/></button>
    <button onClick={()=>setps(!state.pomodoroStatus)} className='w-16 h-16  rounded-full flex items-center justify-center'><img src='/svg/clock.svg' className=' w-16'/></button>
    <button onClick={()=>handler("notes")} className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/notes.svg' className=' w-10'/></button>
    <button onClick={()=>handler("todo")} className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/todo.svg' className=' w-10'/></button>
    </div>
  )
}

export default index