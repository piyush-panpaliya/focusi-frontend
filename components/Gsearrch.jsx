import React from 'react'

const Gsearrch = () => {
  return (
    <div className='w-full  flex justify-center col-span-4'>
      <div className='w-full rounded-full py-2 px-2 border-white/50 border-2 text-white flex items-center'>
          <img src='/svg/google.svg' className='h-[20px] mr-3'/>
          <input type='text' className='w-[80%] bg-transparent focus:outline-none text-white/80' placeholder='Google Search'/>
        </div>
    </div>
  )
}

export default Gsearrch