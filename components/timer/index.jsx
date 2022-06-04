import React from 'react'
import Time from './Time'
const index = () => {
  return (
    <div  className='border-2 border-white/50 rounded-2xl   px-3  flex flex-col justify-center items-center w-[80%]'>
      {/* style={{borderImage:`url("/svg/bg.svg")`,borderImageWidth:"30px"}} */}
      <Time/>
    </div>
  )
}

export default index