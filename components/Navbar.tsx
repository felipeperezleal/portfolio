import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className='h-screen border-slate-950 border w-20 py-32'>
      <div className='flex flex-col items-center h-full justify-around'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/felipeperezleal/" target='_blank'>
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/felipeperezleal/" target='_blank'>
            <FaGithub />
          </a>
      </div>
    </div>
  )
}

export default Navbar