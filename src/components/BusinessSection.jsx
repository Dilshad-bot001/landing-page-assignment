import React from 'react'

import Women from '../assets/images/Women.svg'
import Women2 from '../assets/images/women2.svg'
import Women3 from '../assets/images/women3.svg'
import BusinessDecorator from '../assets/images/businessDecorator.svg'
import CommentCard from './CommentCard'

const Card = ({ number, text }) => {
  return (
    <div className='w-[150px] h-[100px] flex flex-col justify-between border-l-4 px-3 border-[#F78430]'>
      <h2 className='text-4xl font-bold text-[#313131]'>{number}+</h2>
      <h4 className='w-20 text-sm font-medium text-[#828282]'>{text}</h4>
    </div>
  )
}

const BusinessSection = () => {
  return (
    <section className='mt-20 flex flex-col items-center'>
      <img src={BusinessDecorator} alt="decorator" className='w-[300px] h-[300px] absolute z-10 top-[1800px] left-0' />
      <h1 className='text-4xl font-semibold text-[#313131]'>We Make your Business Bright</h1>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5' />
      <h4 className='w-[650px] text-[10px] font-medium text-[#828282] text-center'>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4>
      <div className='flex items-center -mt-36'>
        <div className='w-[400px] h-[300px] grid grid-cols-2 gap-5'>
          <Card number='1500' text='Projects Done' />
          <Card number='2000' text='Happy Customers' />
          <Card number='3000' text='Cup of Coffee' />
          <Card number='1890' text='Projects in Queue' />
        </div>
        <div>
          <div className='relative top-[540px]'>
            <CommentCard img={Women2} comment='Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile.' name='Linda, Project Manager' />
          </div>
          <div className='relative top-[350px] left-[260px]'>
            <CommentCard img={Women3} comment='Blessing welcomed ladyship she met humoured sir breeding her.' name='Linda, Project Manager' />
          </div>
          <img src={Women} alt="image" className='w-[500px] h-[400px]' />
          <div className='w-[300px] h-[300px] bg-[#F78430] relative bottom-[270px] left-[130px] -z-10' />
        </div>
      </div>
    </section>
  )
}

export default BusinessSection