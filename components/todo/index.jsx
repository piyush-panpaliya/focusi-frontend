import React from 'react'

const index = () => {
  return (
    <div className='bg-[#212529]/75 rounded-lg  h-[48vh] py-4'>
      
      <div className='h-[20%] flex justify-center items-center gap-3  px-4'>
        <button><img className='w-6' src='/svg/edit.svg'/></button>
        <p className='text-2xl text-white/50'>Tasks</p>
        <button><img className='w-6' src='/svg/new.svg'/></button>
      </div>

      <div className='overflow-y-scroll h-[80%] px-4 '>
        {[1,1,1,1,1].map(()=>
        <div className='flex items-center justify-between py-2 '>
          
          <div className='flex items-center gap-3'>
            <input namw='radio-1' type='radio' className='radio radio-xs' />
            <p className='text-lg text-white/50'>physics </p>
          </div>

          <div className='flex items-center gap-1'>
            <button><img className='w-6' src='/svg/done.svg'/></button>
            <button><img className='w-6' src='/svg/delete.svg'/></button>
          </div>

        </div>
        )}
      </div>
    </div>
  )
}

export default index