import React from 'react'
import { AppContext } from '../../AppContext'
import {useQuery} from 'react-query'
import { GET } from '../../apihelper'

const index = () => {
  const {data, isLoading } = useQuery('getlb',()=> GET("leaderboard/daily"))
  return (
    <div className='bg-[#212529]/75 rounded-lg  h-full p-4 flex flex-col items-center'>
      <p className='text-2xl text-white/50 mb-6'>Leaderboard</p>
      <div className='w-full flex flex-col items-center gap-3 overflow-y-scroll'>
        {data&&data.data.users.map((a,n)=><div key={a._id} className='w-[80%] flex justify-between items-center border-2 border-white/50 rounded-lg px-2 py-2'>
          <p className='text-white/50'>{a.name}</p>
          <p className='text-white/50'>{a.workEfficiency}</p>
        </div>)}
      </div>
    </div>
  )
}

export default index