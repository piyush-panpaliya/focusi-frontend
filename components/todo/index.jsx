import React,{useContext,useState} from 'react'
import { AppContext } from '../../AppContext'
import {POST,GET,PUT,DEL} from '../../apihelper'
import useSWR,{mutate} from 'swr'
import {v4 as uuidv4} from 'uuid'
import Fade from 'react-reveal/Fade';

const Index = () => {
  const {state,settask,setalltask,deltask,updatetask,edittask} = useContext(AppContext)
  const [task, setState] = useState('')
  const [selected, setSelected] = useState()
  const [open, setopen] = useState(false)
  const {data, isLoading } = useSWR('gettask',()=> GET("todo"),{initialData:state.tasks,revalidateOnFocus:false})
  const handleEdit=(e)=>{
    e.preventDefault()
    edittask(selected._id,selected.title)
    PUT(`todo/${selected._id}/title`,{title:selected.title})
    mutate('gettask')
  }


  const handleSave=async(e)=>{
    e.preventDefault()
    settask({title:task,completed:false,_id:uuidv4()}) 
    POST({title:task},`todo`)
    setopen(false)
    setState('')
    const data=await mutate('gettask')
    setalltask(data.data.todos)
  } 
  
  const handleDone=(a)=>{
    updatetask(a)
    PUT(`todo/${a}/status`)
    mutate('gettask')
    
  }
  const handleDel=async(a)=>{
    deltask(a)
    DEL(`todo/${a}`)
    mutate('gettask')
  }

  return (
    <Fade left duration={900} distance="50px" when={state.UI.todo}>
    <div className='bg-[#212529]/75 rounded-lg  h-full py-4'>
      
      <div className='h-[20%] flex justify-center items-center gap-3  px-4'>
        {/* <button><img className='w-6' src='/svg/edit.svg'/></button> */}
        <p className='text-2xl 2xl:text-3xl text-white/50'>Tasks</p>
        <button onClick={()=>setopen(!open)}><img className='w-6 focus:outline-none' src='/svg/new.svg'/></button>
      </div>

      <div className='overflow-y-scroll overflow-x-hidden h-[80%] px-4 '>

        {open&&<form onSubmit={handleSave} className='flex items-center relative'>
          <input value={task} onChange={e=>setState(e.target.value)} className=' bg-[#212529]/80 focus:outline-none border-2 border-white/50 rounded-lg p-2 pr-9 w-full relative 2xl:text-lg'/>
          <button type='submit' className=' absolute right-1 focus:outline-none'><img className='w-8 h-8' src='/svg/tick.svg'/></button>
        </form>}

        {state.task&&state.task?.reverse().map((a,n)=>!a.completed&&
        <div  key={a._id} className='flex items-center justify-between py-2 '>
          <form onSubmit={(e)=>handleEdit(e)} className='flex items-center gap-3'>
            {/* <input namw='radio-1' type='radio' className='radio radio-xs' /> */}
            <p  className='text-lg 2xl:text-2xl'>{n+1}.</p>
            <input 
            value={selected&&selected._id===a._id?selected.title:a.title} 
            // onClick={()=>)}
            onChange={e=>{
              setSelected(a)
              setSelected(pstate=>{
                return{...pstate,title:e.target.value}
              })
            }} 
            className='text-lg 2xl:text-2xl text-white/50 bg-transparent focus:outline-none'/>
          </form>

          <div className='flex items-center gap-1'>
            <button onClick={()=>handleDone(a._id)}><img className='w-6 2xl:w-8 focus:outline-none ' src='/svg/done.svg'/></button>
            <button onClick={()=>handleDel(a._id)}><img className='w-6 2xl:w-8 focus:outline-none ' src='/svg/delete.svg'/></button>
          </div>

        </div>
        )}
        {state.task&&state.task?.reverse().map((a,n)=>a.completed&&
        <div  key={a._id} className='flex items-center justify-between py-2 mt-2'>
          <div className='flex items-center gap-3'>
            {/* <input namw='radio-1' type='radio' className='radio radio-xs' /> */}
            <p className='ml-2 text-lg 2xl:text-2xl text-white/50 bg-transparent focus:outline-none line-through'>{a.title}</p>
          </div>

          <div className='flex items-center gap-1'>
            <button onClick={()=>handleDel(a._id)}><img className='w-6 2xl:w-8' src='/svg/delete.svg'/></button>
          </div>

        </div>
        )}
      </div>
    </div>
    </Fade>
  )
}

export default Index

