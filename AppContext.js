import React,{useState,useEffect} from "react";
const AppContext = React.createContext(null);

const defaultUI={
  lb:true,
  notes:true,
  graph:true,
  todo:true
}
const defaultData={
  jwt:null,
  username:null,
  task:[],
  break:[],
  session:[],
  score:[],
  pomodoroStatus:null,
  leaderboard:[],
  notes:"",
  UI:defaultUI
}

const AppContextProvider = ({
  data = defaultData,
  children
}) => {
  const [state,setState]=useState(data);

  useEffect(() => {
    if(!localStorage.getItem('data')){
      console.log("state is empty")
      localStorage.setItem('data',JSON.stringify(data));
    }else{
      setState(JSON.parse(localStorage.getItem('data')));
    }
    return()=>{
      localStorage.setItem('data',JSON.stringify(state))
    }
  }, [])

  

  const deepSetjwt = jwt =>{
  setState(prevState => ({ ...prevState, jwt: jwt }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetusername = username =>{
  setState(prevState => ({ ...prevState, username: username }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSettask = task =>{
  setState(prevState => ({ ...prevState, task: [...prevState.task,task] }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetbreak = b =>{
  setState(prevState => ({ ...prevState, break: b }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetsession = session =>{
  setState(prevState => ({ ...prevState, session: session }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetscore = score =>{
  setState(prevState => ({ ...prevState, score: score }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetps = ps =>{
  setState(prevState => ({ ...prevState, pomodoroStatus: ps }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetlb = lb =>{
  setState(prevState => ({ ...prevState, leaderboard: lb }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetnotes = notes =>{
  setState(prevState => ({ ...prevState, notes: notes }));
  localStorage.setItem('data',JSON.stringify(state))
}
  const deepSetUI = (w,ui) => {
  setState(prevState => ({...prevState,UI:{ ...prevState.UI, [w]: ui }}));
  localStorage.setItem('data',JSON.stringify(state))
}

  return (
    <AppContext.Provider
      value={{
        state,
        ui:state.UI,
        setjwt: deepSetjwt,
        setusername: deepSetusername,
        settask: deepSettask,
        setbreak: deepSetbreak,
        setsession: deepSetsession,
        setscore: deepSetscore,
        setps: deepSetps,
        setlb: deepSetlb,
        setnotes: deepSetnotes,
        setUI:deepSetUI
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider };