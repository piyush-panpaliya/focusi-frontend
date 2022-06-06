import React,{useState,useEffect,useContext} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '../AppContext'
import Link from 'next/link'


const Login = () => {
  const router = useRouter()
  const {setjwt,setuser,state}=useContext(AppContext)
  const [error,setError]=useState("")
  const [data, setdata] = useState({name:"",username:"",password:""})
  const handle=async(e)=>{
    e.preventDefault()
    const res= await(await fetch("https://pomo-hackfest.herokuapp.com/api/auth/register",{method:"post",body:JSON.stringify(data),headers:{'Content-Type':'application/json'}})).json()
    if (res.accessToken){
      console.log("ok")
      setuser(res.user)
      setjwt(res.accessToken)
      router.push("/")
    }else{
      setError(res.message)
    }
  }
  useEffect(()=>{
    if(state.jwt){
      router.push("/")
    }
  },[])
  return (
    <div className='w-screen h-screen  flex flex-col items-center justify-center relative overflow-hidden'>
      <img draggable={false}  src='/svg/bg2.png' className='h-[200%] absolute z-[-1] '/>
      <div className='flex flex-col justify-center items-center  py-8 px-12 rounded-2xl border-2 border-white/50'>
        <img draggable={false}  src='/svg/logo.svg'/> 
        <p className='mt-8 mb-8 text-5xl text-white font-extralight'>Sign Up</p>
        <form onSubmit={handle} className='flex flex-col items-center'> 
        <p className='h-4 mt-2 text-red-500/75'>{error}</p>
          <p className='w-full text-xl text-white/50 mt-2 mb-1'>Name</p>
          <input value={data.name} onChange={e=>setdata({...data,name:e.target.value})}  type='text' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Username</p>
          <input value={data.username} onChange={e=>setdata({...data,username:e.target.value})}  type='text' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Password</p>
          <input value={data.password} onChange={e=>setdata({...data,password:e.target.value})}  type='password' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>  
          <div className='flex flex-col items-center'>
            <button className='w-56 py-3 px-4 rounded-xl text-2xl mt-12 border-2 border-white/75 text-white'>SIGN UP</button>
            <Link href='/login'><p className='hover:mb-0 mb-[2px] text-md mt-3  text-white/75 hover:border-b-2 hover:border-white/50'>Already have an account? Login</p></Link>
          </div>        </form> 
      </div>
    </div>
  )
}

export default Login