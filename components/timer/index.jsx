import React,{useContext} from 'react'
import { AppContext } from '../../AppContext'
import Time from './Time'
import Fade from 'react-reveal/Fade';


const Index = () => {
  const {state}=useContext(AppContext)
  return (state.pomodoroStatus?
    <Fade duration={2000} >
      <div  className=' px-3   flex flex-col justify-center items-center w-[80%] mt-[23vh]'>
        <Time/>
      </div>
    </Fade>:
    <Fade duration={2000} >
      <div  className=' px-3  flex flex-col justify-center items-center w-[80%] border-2 border-[#00D1FF]/50 rounded-2xl'>
        <Time/>
      </div>
    </Fade>
  )
}

export default Index