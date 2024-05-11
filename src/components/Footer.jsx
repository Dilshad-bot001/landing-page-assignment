import React from 'react'

import Facebook from '../assets/icons/Facebook.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Instagram from '../assets/icons/Instagram.svg'
import Linkedin from '../assets/icons/Linkedin.svg'

const Footer = () => {
  return (
    <section className='mt-20 flex flex-col items-center mb-5'>
      <div className='flex justify-between items-center w-[880px] mb-5'>
        <div className='flex flex-col justify-between px-5 py-8 w-[220px] h-[200px]'>
          <h2 className='text-lg font-bold text-[#313131]'>Digi.Business</h2>
          <h4 className='text-[10px] font-medium text-[#828282]'>We use multi-mic and echo cancellation technology so that everyone can use device.</h4>
          <div className='flex justify-between'>
            <img src={Facebook} alt="Facebook" className='footer-icon' />
            <img src={Twitter} alt="Twitter" className='footer-icon' />
            <img src={Instagram} alt="Instagram" className='footer-icon' />
            <img src={Linkedin} alt="Linkedin" className='footer-icon' />
          </div>
        </div>
        <div className='flex flex-col justify-between px-5 py-8 w-[200px] h-[200px] ml-40'>
          <h2 className='footer-h2'>Resources</h2>
          <div className='h-[130px] mt-8 flex flex-col justify-between'>
            <h4 className='footer-h4'>Features</h4>
            <h4 className='footer-h4'>Pricing</h4>
            <h4 className='footer-h4'>Login</h4>
          </div>
        </div>
        <div className='flex flex-col justify-between px-5 py-8 w-[200px] h-[200px]'>
        <h2 className='footer-h2'>Legal</h2>
          <div className='h-[130px] mt-8 flex flex-col justify-between'>
            <h4 className='footer-h4'>Terms of Use</h4>
            <h4 className='footer-h4'>Privacy Policy</h4>
            <h4 className='footer-h4'>Legal Notice</h4>
          </div>
        </div>
        <div className='flex flex-col justify-between px-5 py-8 w-[200px] h-[200px]'>
        <h2 className='footer-h2'>Links</h2>
          <div className='h-[130px] mt-8 flex flex-col justify-between'>
            <h4 className='footer-h4'>Feedback</h4>
            <h4 className='footer-h4'>Privacy Policy</h4>
            <h4 className='footer-h4'>Legal Notice</h4>
          </div>
        </div>
      </div>
      <div className='w-screen h-7 bg-[#F78430] flex items-center justify-center'>
        <h4 className='text-[10px] text-[#FAFAFA] font-medium'>Copyright @2024, All rights reserved.</h4>
      </div>
    </section>
  )
}

export default Footer