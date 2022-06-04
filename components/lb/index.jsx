import React from 'react'

const index = () => {
  return (
    <div className='bg-[#212529]/75 rounded-lg  h-[50vh] p-4 flex flex-col items-center'>
      <p className='text-2xl text-white/50 mb-6'>Leaderboard</p>
      <div className='w-full flex flex-col items-center gap-3 overflow-y-scroll'>
        {[1,2,3,4,5,6,7,8].map((a)=><div key={a} className='w-[80%] flex justify-between items-center border-2 border-white/50 rounded-lg px-2 py-2'>
          <p className='text-white/50'>Piyush</p>
          <p className='text-white/50'>69</p>
        </div>)}
      </div>
    </div>
  )
}

export default index