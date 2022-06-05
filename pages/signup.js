import React,{useState,useEffect,useContext} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '../AppContext'

const Login = () => {
  const router = useRouter()
  const {setjwt,setuser,state}=useContext(AppContext)
  const [data, setdata] = useState({name:"",username:"",password:""})
  const handle=async(e)=>{
    e.preventDefault()
    console.log(data)
    const res= await fetch("https://roll-bag.codedamn.app:1338/api/auth/register",{method:"post",body:JSON.stringify(data),headers:{'Content-Type':'application/json'}})
    if (res.ok){
      console.log("ok")
      setuser(res.data.user)
      setjwt(res.data.accessToken)
      router.push("/")
    }
  }
  useEffect(()=>{
    if(state.jwt){
      router.push("/")
    }
  },[])
  return (
    <div className='w-screen h-screen  flex flex-col items-center justify-center relative overflow-hidden'>
      <img src='/svg/bg2.svg' className='h-[200%] absolute z-[-1] '/>
      <div className='flex flex-col justify-center items-center  py-8 px-12 rounded-2xl border-2 border-white/50'>
        <img src='/svg/logo.svg'/> 
        <p className='mt-8 mb-8 text-5xl text-white font-extralight'>Sign Up</p>
        <form onSubmit={handle} className='flex flex-col items-center'> 
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Name</p>
          <input value={data.name} onChange={e=>setdata({...data,name:e.target.value})}  type='text' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Username</p>
          <input value={data.username} onChange={e=>setdata({...data,username:e.target.value})}  type='text' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Password</p>
          <input value={data.password} onChange={e=>setdata({...data,password:e.target.value})}  type='password' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>  
          <button className='w-56 py-3 px-4 rounded-xl text-2xl mt-12 border-2 border-white/75'>SignUp</button>
        </form> 
      </div>
    </div>
  )
}

export default Login