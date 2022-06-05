import React,{useContext} from 'react'
import { AppContext } from '../../AppContext'
const Index = () => {
  const {setUI,state,setps,setallUI,setallfUI}=useContext(AppContext)
  const handler=(a)=>{
    setUI(a,!(state.UI[a]))
  }
  const shandler=()=>{
    setps(!state.pomodoroStatus)
    if(!state.pomodoroStatus){
      setallUI()
    }else{
      setallfUI()
    }
  }
  return (
    <div className='flex gap-5 justify-center my-4 lg:my-2 '>
    <button onClick={()=>handler("graph")} className=' w-10 lg:w-16 h-10 lg:h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/efficiency.svg' className=' w-12'/></button>
    <button onClick={()=>handler("lb")} className=' w-10 lg:w-16 h-10 lg:h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/lb.svg' className='w-5 lg:w-10'/></button>
    <button onClick={shandler} className=' w-10 lg:w-16 h-10 lg:h-16  rounded-full flex items-center justify-center'><img src='/svg/clock.svg' className='w-10 lg:w-16'/></button>
    <button onClick={()=>handler("notes")} className=' w-10 lg:w-16 h-10 lg:h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/notes.svg' className='w-5 lg:w-10'/></button>
    <button onClick={()=>handler("todo")} className=' w-10 lg:w-16 h-10 lg:h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/todo.svg' className='w-5 lg:w-10'/></button>
    </div>
  )
}

export default Index