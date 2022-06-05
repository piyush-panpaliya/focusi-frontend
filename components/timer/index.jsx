import React,{useContext} from 'react'
import { AppContext } from '../../AppContext'
import Time from './Time'

const index = () => {
  const {state}=useContext(AppContext)
  return (
    <div  className={' px-3  flex flex-col justify-center items-center w-[80%] '+(state.pomodoroStatus?"mt-[15vh]":"border-2 border-white/50 rounded-2xl")}>
      {/* style={{borderImage:`url("/svg/bg.svg")`,borderImageWidth:"30px"}} */}
      <Time/>
    </div>
  )
}

export default index