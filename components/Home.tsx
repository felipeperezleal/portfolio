import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Home = () => {
  return (
    <div className='h-screen flex items-center justify-around'>
      <div className='flex flex-col p-20 items-start justify-evenly h-full'>
        <div>
          <p className='text-4xl font-jost text tracking-tight font-medium md:text-7xl'>{"Hello, I'm Felipe Pérez Leal."}</p>
          <p className='text-1xl font-jost tracking-widest py-10 md:text-3xl'>SOFTWARE  DEVELOPER</p>
        </div>
        <div className='flex items-center'>
          <button className='text-xs rounded-full border py-2 px-4 text-black border-black hover:bg-black hover:text-white transition-colors md:text-lg'>
            <a href="/cv.pdf" target="_blank" className='font-jost'>
              Get my resume
            </a>
          </button>
          <a href="https://www.linkedin.com/in/felipeperezleal/" target='_blank' className='px-11'>
            <FaLinkedin size={20}/>
          </a>
          <a href="https://www.github.com/felipeperezleal" target='_blank'>
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home