import React from 'react'

const index = () => {
  const a=[
    {
      name:'efficiency',
    },
    {
      name:'lb',
    },
    {
      name:'clock',
    },
    {
      name:'notes',
    },
    {
      name:'todo',
    }
  ]
  return (
    <div className='flex gap-5 justify-center'>
    <button className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/efficiency.svg' className=' w-12'/></button>
    <button className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/lb.svg' className=' w-10'/></button>
    <button className='w-16 h-16  rounded-full flex items-center justify-center'><img src='/svg/clock.svg' className=' w-16'/></button>
    <button className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/notes.svg' className=' w-10'/></button>
    <button className='w-16 h-16 border-white/50 border-2  rounded-full flex items-center justify-center'><img src='/svg/todo.svg' className=' w-10'/></button>
    </div>
  )
}

export default index