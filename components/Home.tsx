import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col p-20 justify-around h-full w-full'>
        <div>
          <p className='text-4xl text tracking-tight font-medium md:text-8xl'>{"Hello, I'm Felipe Pérez Leal."}</p>
          <p className='text-1xl tracking-widest py-10 md:text-4xl'>SOFTWARE  DEVELOPER</p>
        </div>
        <div className='flex items-center'>
          <button className='text-xs rounded-full border py-2 px-4 text-stone-950 border-stone-950 hover:bg-stone-950 hover:text-white transition-colors md:text-lg'>
            <a href="/cv.pdf" target="_blank">
              Get my resume
            </a>
          </button>
          <div className='px-11'>
            <a href="https://www.linkedin.com/in/felipeperezleal/" target='_blank'>
              <FaLinkedin size={20} />
            </a>
          </div>
          <a href="https://www.github.com/felipeperezleal" target='_blank'>
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className='flex h-1/6 justify-center items-center'>
        <a href="">
          <IoIosArrowDown size={50} />
        </a>
      </div>
    </div>
  )
}

export default Home