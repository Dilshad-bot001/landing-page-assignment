import React from 'react'

import Profile from '../assets/icons/profile.svg'
import Document from '../assets/icons/document.svg'
import Search from '../assets/icons/search.svg'
import Tick from '../assets/icons/tick.svg'

const Card = ({ icon , title }) => {
  return (
    <div className='w-40 h-24 py-4 flex flex-col items-center justify-between rounded-lg'>
      <img src={icon} alt="icon" className='w-8 h-8' />
      <h2 className='text-sm font-medium text-[#2C3847]'>{title}</h2>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5 hidden hover:block' />
    </div>
  )
}

const WorkSection = () => {
  return (
    <section className='mt-20 flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-[#313131]'>How it Works?</h1>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5' />
      <h4 className='w-[650px] text-[10px] font-medium text-[#828282] text-center'>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4>
      <div className='mt-24 flex justify-between'>
        <div className='w-[350px] flex flex-col gap-5'>
          <Card icon={Profile} title='Create Account'/>
          <Card icon={Document} title='Upload requirements'/>
          <Card icon={Search} title='Search Services'/>
          <Card icon={Tick} title='Apply'/>
        </div>
        <div className='w-[450px] flex flex-col'>
          <h2 className='text-lg text-black font-medium'>How to create account?</h2>
          <h4 className='text-[10px] text-[#828282] font-normal mt-5 mb-10'>And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. <br /><br /> Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at.</h4>
          <div className='flex gap-5'>
            <button className='button2'>CREATE ACCOUNT</button>
            <button className='button2'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection