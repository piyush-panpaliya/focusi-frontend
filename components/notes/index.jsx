import React from 'react'

const index = () => {
  return (
    <div className='bg-[#212529]/75 rounded-lg flex flex-col h-[30vh] p-4'>
      <p className='text-2xl text-center mb-4'>Notes</p>
      <textarea className='bg-[#212529] p-4 overflow-y-scroll rounded-lg focus:outline-none  w-full flex-grow'/>
    </div>
  )
}

export default index