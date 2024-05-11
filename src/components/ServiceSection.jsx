import React from 'react'

import Star from '../assets/icons/star.svg'
import Globe from '../assets/icons/globe.svg'
import Web from '../assets/icons/web.svg'
import Analysis from '../assets/icons/analyse.svg'
import ServiceDecorator from '../assets/images/serviceDecorator.svg'

const ServiceCard = ({ icon , title, desc }) => {
  return (
    <div className='w-60 h-36 py-6 flex flex-col items-center justify-between border border-[#313131] rounded-lg hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
      <img src={icon} alt="icon" className='w-8 h-8' />
      <h2 className='text-sm text-[#2C3847]'>{title}</h2>
      <h4 className='w-52 text-[10px] text-[#828282] text-center'>{desc}</h4>
    </div>
  )
}

const ServiceSection = () => {
  return (
    <section className='mt-10 flex flex-col items-center' id='about'>
      <h1 className='text-4xl font-semibold text-[#313131]'>Our Services</h1>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5'/>
      <h4 className='w-[650px] text-[10px] font-medium text-[#828282] text-center'>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4>
      <div className='mt-8 grid grid-cols-2 gap-5'>
        <ServiceCard icon={Star} title='BRANDING IDENTITY' desc='Our support team will get assistance from AI-powered.' />
        <ServiceCard icon={Globe} title='BRANDING CONSULT' desc='Our support team will get assistance from AI-powered.' />
        <ServiceCard icon={Web} title='WEB DEVELOPMENT' desc='Our support team will get assistance from AI-powered.' />
        <ServiceCard icon={Analysis} title='MARKET ANALYSIS' desc='Our support team will get assistance from AI-powered.' />
      </div>
      <img src={ServiceDecorator} alt="decorator" className='w-[300px] h-[300px] absolute right-0 top-[950px]' />
    </section>
  )
}

export default ServiceSection