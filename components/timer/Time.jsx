import React from 'react'


const TimeBreak = () => {
  return (
    <div className='flex justify-center gap-2 hover:border-b-[2px] border-white/50 w-fit mt-2 mb-[32px] hover:mb-[30px]'>
        <p className='text-white text-4xl'>25</p>
        <p className='text-white text-4xl'>:</p>
        <p className='text-white text-4xl'>00</p>
      </div>
  )
}



const Controller = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <button><img src='/svg/minus.svg' className='w-16' /></button>
      <button className=' border-[4px] border-white rounded-lg w-[120px] h-16 text-white text-2xl text-center align-middle'>
        START
      </button>
      <button><img src='/svg/plus.svg' className='w-16' /></button>
    </div>
  )
}



const Time = () => {
  return (
    <div className='flex flex-col py-4 justify-center items-center'>
      <div className='flex justify-center gap-2 hover:border-b-[2px] border-white/50 w-fit mb-[2px] hover:mb-0'>
        <p className='text-white text-8xl'>25</p>
        <p className='text-white text-8xl'>:</p>
        <p className='text-white text-8xl'>00</p>
      </div>
      <TimeBreak/>
      <Controller/>
    </div>
  )
}

export default Time