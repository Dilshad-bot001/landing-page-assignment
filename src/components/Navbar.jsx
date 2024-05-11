import React from 'react'

import close from '../assets/icons/close.png'
import menu from '../assets/icons/menu.png'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center text-[#313131] mt-5'>
      <h1 className='text-xl font-bold '>Digi.Business</h1>
      <ul className='w-[300px] flex justify-between text-sm font-medium'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='w-[180px] flex justify-between text-sm font-medium'>
        <button className='button'>Login</button>
        <button className='button'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar