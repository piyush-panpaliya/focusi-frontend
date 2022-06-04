import React,{useContext,useState} from 'react'
import { AppContext } from '../../AppContext'
import {useQuery} from 'react-query'
import {POST} from '../../apihelper'
const index = () => {
  const {state,settask} = useContext(AppContext)
  const [task, setState] = useState('')
  const [open, setopen] = useState(false)
  const handleEdit=(e)=>{
    e.preventDefault()
    //api call

  }
  const handleSave=(e)=>{
    e.preventDefault()
    console.log(task)
    //api 
    POST({title:task},"todo","post")
    // const {data, error, isError, isLoading } = useQuery('taskadd', POST({title:task},"todo","post"))
    settask({title:task})  
    setopen(false)
    setState('')
  } 
  return (
    <div className='bg-[#212529]/75 rounded-lg  h-[48vh] py-4'>
      
      <div className='h-[20%] flex justify-center items-center gap-3  px-4'>
        <button><img className='w-6' src='/svg/edit.svg'/></button>
        <p className='text-2xl text-white/50'>Tasks</p>
        <button onClick={()=>setopen(true)}><img className='w-6' src='/svg/new.svg'/></button>
      </div>

      <div className='overflow-y-scroll h-[80%] px-4 '>

        {open&&<form onSubmit={handleSave} className='flex items-center'>
          <input value={task} onChange={e=>setState(e.target.value)} className='bg-[#212529]/80 focus:outline-none rounded-lg p-2 pr-4 w-full relative'/>
          <button type='submit' className='w-4 h-4 bg-white absolute right-1'/>
        </form>}

        {state.task?.map((a)=>
        <div  key={a} className='flex items-center justify-between py-2 '>
          <div className='flex items-center gap-3'>
            <input namw='radio-1' type='radio' className='radio radio-xs' />
            <input value={a.title} className='text-lg text-white/50 bg-transparent focus:outline-none'/>
          </div>

          <div className='flex items-center gap-1'>
            <button onClick><img className='w-6' src='/svg/done.svg'/></button>
            <button><img className='w-6' src='/svg/delete.svg'/></button>
          </div>

        </div>
        )}
      </div>
    </div>
  )
}

export default index

