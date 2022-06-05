import React from 'react'

const Gsearrch = () => {
  const [query, setQuery] = React.useState('')
  const submit=(e)=>{
    e.preventDefault()
    const URL="https://www.google.com/search?q="+encodeURIComponent(query)
    window.open(URL, '_blank');
    setQuery('')
  }
  return (
    <div className='w-full  flex justify-center col-span-4'>
      <form onSubmit={submit} className='w-full rounded-full py-2 px-2 2xl:px-4 2xl:py-4 border-white/50 border-2 text-white flex items-center'>
          <img src='/svg/google.svg' className='h-[20px] 2xl:h-6 mr-3'/>
          <input value={query} onChange={(e)=>setQuery(e.target.value)} type='text' className='w-[80%] bg-transparent focus:outline-none 2xl:text-lg text-white/80' placeholder='Google Search'/>
        </form>
    </div>
  )
}

export default Gsearrch
