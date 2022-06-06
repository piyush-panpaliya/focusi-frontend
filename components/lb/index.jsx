import React,{useContext,useEffect} from 'react'
import { AppContext } from '../../AppContext'
import { GET } from '../../apihelper'
import useSWR from 'swr'
import Fade from 'react-reveal/Fade';


const Index = () => {
  const {state,setlb}=useContext(AppContext)
  const fetch=async()=>{
    const data=await GET("leaderboard/daily")
    setlb(data.data.users.map(a=>{
      return{name:a.name,workEfficiency:a.workEfficiency}
    }))
  }
  useSWR('getlb',()=> fetch(),{revalidateOnFocus:false})
  
  return (
    <Fade right duration={900} distance="50px"  when={state.UI.lb}>
    <div className='bg-[#212529]/75 rounded-lg  h-full p-4 flex flex-col items-center'>
      <p className='text-2xl text-white/50 mb-6'>Leaderboard</p>
      <div className='w-full flex flex-col items-center gap-3 overflow-y-scroll'>
        {state.leaderboard.map((a,n)=><div key={n} className='w-[80%] flex justify-between items-center border-2 border-white/50 rounded-lg px-2 py-2'>
          <p className='text-white/50'>{a.name}</p>
          <p className='text-white/50'>{a.workEfficiency}</p>
        </div>)}
      </div>
    </div>
    </Fade>
  )
}

export default Index