import React,{useState,useContext,useCallback} from 'react'
import usePomodoro from '../../hooks/usePomodoro'
import {POST} from '../../apihelper'
import { AppContext } from '../../AppContext'
import { v4 as uuidv4 } from 'uuid';

const formatter=(t)=>{
  const min = Math.floor(t / 60);
  const sec = t-(Math.floor(t/60)*60)
  return({
    minutes:min<10?'0'+min:min,
    seconds:sec<10?'0'+sec:sec
  })
}

const Time = () => {
  const {setallUI,setallfUI, setps,state}=useContext(AppContext)
  const [time,setTime]=useState({work:300,break:60})
  const [clicked,setClicked]=useState("work")
  const [log,setLog]=useState({})
  const { ticking, start, stop, reset, timeLeft, progress,active } = usePomodoro({
    inputTime: time,
    clicked,
    onStart: () => {
      const d1 =( new Date()).getTime();
      const type=clicked==="work"?"pomodoro":"break"
      setLog({type:type,startedAt:d1})
      setallUI()
      setps(true)
    },
    onStop: async() => {
      const d1 =( new Date()).getTime();
      setps(false)
      setallfUI()
      if (log.type==="pomodoro"){
        await POST({name:uuidv4(),startedAt:log.startedAt,endedAt:d1},`pomodoro/add-${log.type}`)
      }else{
        await POST({startedAt:log.startedAt,endedAt:d1},`pomodoro/add-${log.type}`)
      }
      setLog({})
    },
    onComplete: async() => {
      const d1 =( new Date()).getTime();
      setps(false)
      if (log.type==="pomodoro"){
        await POST({name:uuidv4(),startedAt:log.startedAt,endedAt:d1},`pomodoro/add-${log.type}`)
      }else{
        await POST({startedAt:log.startedAt,endedAt:d1},`pomodoro/add-${log.type}`)
      }
      setLog({})
      setallfUI()
    },
  });

  const toggleTimer = useCallback(() => {
    if (ticking) {
      reset();
      if(active==="work"){
        setTime((t)=>{
          return {...t,work:1500}
        })
      }else if(active==="break"){
        setTime((t)=>{
          return {...t,break:300}
        })
      }
    } else {
      start();

    }
  }, [start, reset, ticking]);

  const toggleActive=useCallback((a)=>{
    setClicked(a)
  },[reset, ticking])
  
  const toggleTime=useCallback((a)=>{
    if (clicked==="work"&&active!=="work"){
      if(a==="plus"){
        setTime((t)=>{
          return {...t,work:t.work+60}
        })
      }else if(a==="minus"){
        setTime((t)=>{
          return {...t,work:t.work-60}
        })
      }
    }else if(clicked==="break"&&active!=="break"){
      if(a==="plus"){
        setTime((t)=>{
          return {...t,break:t.break+60}
        })
      }else if(a==="minus"){
        setTime((t)=>{
          return {...t,break:t.break-60}
        })
      }
    }
  },[clicked, ])

  return (!state.pomodoroStatus?
    <div className='flex flex-col py-4 justify-center items-center'>
      <div onClick={()=>toggleActive("work")} className={'flex justify-center gap-2  border-white/50 w-fit mb-[2px] '+(clicked==="work"&&"mb-0 border-b-[2px]")}>
        <p className='text-white text-4xl lg:text-8xl'>{active==='work'?formatter(timeLeft).minutes:formatter(time.work).minutes}</p>
        <p className='text-white text-4xl lg:text-8xl'>:</p>
        <p className='text-white text-4xl lg:text-8xl'>{active==='work'?formatter(timeLeft).seconds:formatter(time.work).seconds}</p>
      </div>
      <div onClick={()=>toggleActive("break")} className={'flex justify-center gap-2  border-white/50 w-fit mt-2 mb-[32px]  '+(clicked==="break"&&"border-b-[2px] mb-[30px]")}>
        <p className='text-white text-2xl lg:text-4xl'>{active==='break'?formatter(timeLeft).minutes:formatter(time.break).minutes}</p>
        <p className='text-white text-2xl lg:text-4xl'>:</p>
        <p className='text-white text-2xl lg:text-4xl'>{active==='break'?formatter(timeLeft).seconds:formatter(time.break).seconds}</p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <button onClick={()=>toggleTime("minus")}><img src='/svg/minus.svg' className=' w-8 lg:w-16' /></button>
        <button onClick={toggleTimer} className=' border-[4px] border-white rounded-lg w-[80px] h-12 lg:w-[120px] lg:h-16 text-white text-lg lg:text-2xl text-center align-middle'>
          {ticking?'STOP':'START'}  
        </button>
        <button onClick={()=>toggleTime("plus")}><img src='/svg/plus.svg' className=' w-8 lg:w-16' /></button>
    </div>
    </div>:
      <div className='flex justify-center gap-2 w-fit  '>
        <p className='text-white text-4xl lg:text-8xl'>{formatter(timeLeft).minutes}</p>
        <p className='text-white text-4xl lg:text-8xl'>:</p>
        <p className='text-white text-4xl lg:text-8xl'>{formatter(timeLeft).seconds}</p>
      </div>
  )
}

export default Time