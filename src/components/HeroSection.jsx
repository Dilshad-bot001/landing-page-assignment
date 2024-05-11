import React from 'react'

import CommentCard from './CommentCard'
import HeroImage from '../assets/images/HeroImage.svg'
import airbnb from '../assets/icons/airbnb.svg'
import dropbox from '../assets/icons/dropbox.svg'
import microsoft from '../assets/icons/microsoft.svg'
import man from '../assets/images/man.svg'
import { companyCards } from '../utils'

const CompanyCard = ({ icon, text }) => {
  return (
    <div className='w-32 h-12 bg-[#FAFAFA] border border-[#DEDEDE] flex justify-center items-center rounded-full text-[#B6B6B6] text-sm hover:drop-shadow-md'>
      <img src={icon} alt="icon" className='w-4 h-4 mr-2' />
      <h4>{text}</h4>
    </div>
  )
}

const HeroSection = () => {

  return (
    <div className='w-[980px] flex justify-between items-center'>
      <div className='w-[450px] flex flex-col'>
        <h1 className='text-5xl font-light leading-[50px]'>Growing your <span className='text-[#F78430] font-bold'>Business</span></h1>
        <p className='text-[10px] font-normal text-[#828282] mt-5 mb-6'>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
        <div className='w-full h-[54px] rounded-full bg-white border border-[#EFEFEF] drop-shadow-lg flex justify-between items-center text-[12px] font-medium'>
          <input type="text" placeholder='SEARCH YOUR SERVICES'
            className='ml-[45px] my-[29px] text-[#828282] outline-none' />
          <button className='flex justify-center items-center w-[100px] h-[44px] bg-[#F78430] text-[#FAFAFA] rounded-full mr-3 drop-shadow-md'>SEARCH</button>
        </div>
        <div className='w-[300px] flex m-auto'>
          {
            <div className='grid grid-cols-2 mt-6 gap-4'>
              <CompanyCard icon={airbnb} text={'airbnb'} />
              <CompanyCard icon={dropbox} text={'dropbox'} />
              <CompanyCard icon={microsoft} text={'microsoft'} />
              <CompanyCard icon={airbnb} text={'stripe'} />
            </div>
          }
        </div>
      </div>
      <div>
        <img src={HeroImage} alt="hero image" className='w-[500px] h-[500px]' />
        <div className='relative -top-36 -right-64'>
          <CommentCard img={man} comment='Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile.' name='Sameer - CEO @ airbnb' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection