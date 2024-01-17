import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between flex-col px-16 py-16 h-screen'>
      <div className='flex justify-end'>
        <button className='rounded-full p-2 hover:bg-blue-500  transition-colors'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <h1 className='font-poppins text-7xl font-bold tracking-tight text-slate-900'>Felipe Pérez Leal</h1>
          <h2 className='font-poppins text-5xl font-light tracking-tigh'>Software Developer</h2>
        </div>
        <div className='flex'>
          <button className='rounded-full p-2 hover:bg-blue-500 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home