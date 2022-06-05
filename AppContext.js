import React,{useState,useEffect} from "react";
const AppContext = React.createContext(null);

const defaultUI={
  lb:false,
  notes:true,
  graph:false,
  todo:true
}
const allUI={
  lb:false,
  notes:false,
  graph:false,
  todo:false
}
const defaultData={
  jwt:false,
  user:null,
  score:[],
  task:[],
  pomodoroStatus:false,
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
      localStorage.setItem('data',JSON.stringify(state));
    }else{
      setState(JSON.parse(localStorage.getItem('data')));
    }
  }, [])


  useEffect(()=>{
    if(state.jwt!==false){
      localStorage.setItem("data",JSON.stringify(state));
    }
  },[state])

  const deepSetjwt = jwt =>setState(prevState => ({ ...prevState, jwt: jwt }));
  const deepSetuser = username =>setState(prevState => ({ ...prevState, user: username }));
  const deepSettask = task =>setState(prevState => ({ ...prevState, task: [...prevState.task,task] }));
  const deepDeltask = task =>setState(prevState => ({ ...prevState, task: prevState.task.filter(t=>t._id!==task) }));
  const deepSetalltask = task =>setState(prevState => ({ ...prevState, task: task }));
  const deeputask = task =>{
    setState(prevState =>{ 
      return (
        { ...prevState, 
          task: prevState.task.map(t=>{
            return( 
              t._id===task?{...t,completed:true}:t
            )
          })
        }
      )
    })
  }
  const deepedittask = (task,title) =>{
    setState(prevState =>{ 
      return (
        { ...prevState, 
          task: prevState.task.map(t=>{
            return( 
              t._id===task?{...t,title:title}:t
            )
          })
        }
      )
    })
  }
  const deepSetbreak = b =>setState(prevState => ({ ...prevState, break: b }));
  const deepSetscore = score =>setState(prevState => ({ ...prevState, score: score }));
  const deepSetps = ps =>setState(prevState => ({ ...prevState, pomodoroStatus: ps }));
  const deepSetlb = lb =>setState(prevState => ({ ...prevState, leaderboard: lb }));
  const deepSetnotes = notes =>setState(prevState => ({ ...prevState, notes: notes }));
  const deepSetUI = (w,ui) => setState(prevState => ({...prevState,UI:{ ...prevState.UI, [w]: ui }}));
  const deepSetallUI = () => setState(prevState => ({...prevState,UI:{...allUI }}));
  const deepSetallfUI = () => setState(prevState => ({...prevState,UI:{...defaultUI }}));

  return (
    <AppContext.Provider
      value={{
        state,
        ui:state.UI,
        setjwt: deepSetjwt,
        setuser: deepSetuser,
        settask: deepSettask,
        setalltask:deepSetalltask,
        updatetask:deeputask,
        deltask:deepDeltask,
        edittask:deepedittask,
        setscore: deepSetscore,
        setps: deepSetps,
        setallUI:deepSetallUI,
        setallfUI:deepSetallfUI,
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