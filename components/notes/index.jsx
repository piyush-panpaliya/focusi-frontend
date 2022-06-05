import React from 'react'

const Index = () => {
  return (
    <div className='bg-[#212529]/75 rounded-lg flex flex-col h-full p-4'>
      <p className='text-2xl text-center mb-4'>Notes</p>
      <textarea className='bg-[#212529] p-4 overflow-y-scroll rounded-lg focus:outline-none text-white/50  w-full flex-grow'/>
    </div>
  )
}

export default Index