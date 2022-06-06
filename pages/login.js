import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useState,useEffect,useContext} from 'react'
import { POST } from '../apihelper'
import { AppContext } from '../AppContext'

const Login = () => {
  const router = useRouter()
  const [data, setdata] = useState({username:"",password:""})
  const [error,setError]=useState("")
  const {setjwt,setuser,state}=useContext(AppContext)
  const handle=async(e)=>{
    e.preventDefault()
    const res={}
    try{
      res= await POST(data,"auth/login")
    }catch(err){
      setError("Invalid username or password")
    }
    if(res.statusText==="OK"){
      setError("")
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
      <img draggable={false}  src='/svg/bg2.png' className='h-[200%] absolute z-[-1] '/>
      <div className='flex flex-col justify-center items-center  py-8 px-12 rounded-2xl border-2 border-white/50'>
        <img draggable={false}  src='/svg/logo.svg'/> 
        <p className='mt-8 mb-8 text-5xl text-white font-extralight'>Login</p>
        <form onSubmit={handle} className='flex flex-col items-center'> 
          <p className='h-4 mt-2 text-red-500/75'>{error}</p>
          <p className='w-full text-xl text-white/50 mt-2 mb-1'>Username</p>
          <input value={data.username} onChange={e=>setdata({...data,username:e.target.value})}  type='text' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>
          <p className='w-full text-xl text-white/50 mt-4 mb-1'>Password</p>
          <input value={data.password} onChange={e=>setdata({...data,password:e.target.value})}  type='password' className='w-[300px] border-2 border-white/50 rounded-lg px-4 py-2 bg-transparent text-white/50 focus:outline-none'/>  
          <div className='flex flex-col items-center'>
            <button className='w-56 py-3 px-4 rounded-xl text-2xl mt-12 border-2 border-white/75 text-white'>LOGIN</button>
            <Link href='/signup'><p className='hover:mb-0 mb-[2px] text-md mt-3  text-white/75 hover:border-b-2 hover:border-white/50'>Do not have an Account, Create one</p></Link>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default Login