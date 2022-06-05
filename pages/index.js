import { useEffect } from 'react'
import Head from 'next/head'
import Graph from '../components/Graph'
import Timer from '../components/timer'
import Music from '../components/music'
import Buttons from '../components/buttons'
import Todo from '../components/todo'
import Notes from '../components/notes'
import Lb from '../components/lb'
import Gsearrch from '../components/Gsearrch'
import Time from '../components/Time'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import {useRouter} from 'next/router'
import { Fade } from 'react-reveal'

export default function Home() {
  const { state } = useContext(AppContext)
  const router=useRouter()
  useEffect(() => {
    if(!state.jwt){
      router.push("/login")
    }
  }, [])
  
  return (
    <div className='relative h-screen w-screen  overflow-hidden'>
      <Fade when={state.pomodoroStatus}>
      <img src="/svg/bgp.png" className='max-w-none xl:max-w-[100vw] top-[-] lg:top-[-8rem] left-0 z-[-11] absolute '/>
      </Fade>
      <Fade when={!state.pomodoroStatus}>
        <img src='/svg/bg2.svg' className='max-w-none xl:max-w-[100vw] top-[-40rem] xl:top-[-8rem] left-0 z-[-10] absolute '/>
      </Fade>
    <div className="w-full h-full overflow-y-scroll lg:overflow-hidden flex flex-col  p-4" >
      <Head>
        <title>Focusi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex items-center sm:grid grid-cols-10  p-4 place-items-center gap-8'>
          <img className='col-span-3 h-4 sm:h-12  ' src='/svg/logo.svg' />
          <Gsearrch/>
          <Time/>
      </div>
      <div className='h-full  w-full grid  grid-cols-10 gap-x-8  pt-0 p-4 '>
        <div className='w-full col-span-10 lg:col-span-3  py-4 pb-3  flex flex-col gap-y-3 lg:gap-y-5 lg:px-0 px-4 sm:px-[15vh] '>
          <div className='w-full h-[80vh] lg:h-[45vh]'><Todo /></div>
          <div className='w-full  lg:h-[30vh] hidden lg:block'><Graph /></div>
        </div>
        <div className=' w-full col-span-10 lg:col-span-4  py-4  flex flex-col gap-y-3 justify-between items-center'>
          <div className='w-full flex flex-col items-center 2xl:min-h-[45vh] justify-center'>
          <Timer />
          </div>
          <div className='w-full flex flex-col gap-y-3'>
          <Buttons/>
          <Music/>
          </div>
        </div>
        <div className='w-full col-span-10 lg:col-span-3  py-4  flex flex-col gap-y-4 lg:gap-y-5'>
          <div className='w-full h-[65vh] lg:h-[30vh]'><Notes/></div>
          <div className='w-full h-[45vh]'><Lb/></div>
        </div>
      </div>
    </div>
    </div>
  )
}
