import React from 'react'

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import headerDecorator from '../assets/images/headerDecorator.svg'

const HeaderSection = () => {
  return (
    <section className='max-w-[980px] mt-[30px]'>
      <img src={headerDecorator} alt="decorator" className='absolute top-0 left-0 w-[300px] h-[300px]' />
        <Navbar />
        <HeroSection />
    </section>
  )
}

export default HeaderSection