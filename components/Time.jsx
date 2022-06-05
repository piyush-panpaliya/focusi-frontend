import React from 'react'

const Time = () => {
  const [value, setValue] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);  
  return (
    <div className='w-full h-12  sm:col-span-3 sm:flex items-center justify-center hidden '>
      <p className='text-white text-4xl text-center align-middle font-bold tracking-widest'>{(value.getHours()).toString()+":"+(value.getMinutes()).toString()}</p>
    </div>
  )
}

export default Time