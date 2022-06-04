import React,{useEffect,useState} from 'react'
import { useTimer } from 'react-timer-hook';

const usePomodoro = () => {
  const expiryTimestamp = new Date();
  const expiryTimestam = new Date();
  // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500)
  // expiryTimestam.setSeconds(expiryTimestam.getSeconds() + 300)
  const {
    seconds:workSeconds,
    minutes:workMinutes,
    isRunning:workIsRunning,
    // start:workStart,
    pause:workPause,
    // resume:workResume,
    restart:workRestart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  const {
    seconds:breakSeconds,
    minutes:breakMinutes,
    isRunning:breakIsRunning,
    // start:breakStart,
    pause:breakPause,
    // resume:breakResume,
    restart:breakRestart,
  } = useTimer({ expiryTimestam, onExpire: () => console.warn('onExpire called') });

  const WorkStart=(time)=>{
    if (!breakIsRunning){
      workRestart(time);
    }else{
      breakPause();
      workRestart(time);
    }
  }
  
  const BreakStart=(time)=>{
    if (!workIsRunning){
      breakRestart(time);
    }else{
      workPause();
      breakRestart(time);
    }
  }

  const WorkTime=()=>{
    if (workIsRunning){
      return {min:workMinutes,sec:workSeconds}
    }else{
      return {min:'25',sec:'00'}
    }
  }
  
  const BreakTime=()=>{
    if (breakIsRunning){
      return {min:breakMinutes,sec:breakSeconds}
    }else{
      return {min:'05',sec:'00'}
    }
  }
  const Running=workIsRunning?"workIsRunning":"breakIsRunning";
  return {
    WorkStart,BreakStart,WorkTime,BreakTime,Running
  }
}

export default usePomodoro
