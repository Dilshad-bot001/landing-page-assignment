import React from 'react'

const Card = ({ cardImg }) => {
  return (
    <div>
      <div className={`w-[270px] h-[300px] rounded-xl pb-5 flex flex-col items-center justify-between ${cardImg}`}>
        <div className='w-14 h-10 text-xs text-[#313131] font-medium flex justify-center items-center rounded-bl-lg rounded-br-lg bg-white'>NEW</div>
        <div className='w-[240px] h-[100px] bg-white py-2 px-3 rounded-lg flex flex-col items-start justify-between'>
          <h2 className='text-[10px] text-[#313131] font-medium'>Distrusts fulfilled happiness unwilling as explained of difficult.</h2>
          <h4 className='text-[8px] text-[#828282] font-normal'>Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.</h4>
          <h2 className='text-[6px] text-[#313131] font-medium'>READ MORE</h2>
        </div>
      </div>
    </div>
  )
}

const BlogSection = () => {
  return (
    <section className='mt-20 flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-[#313131]'>What Customers say</h1>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5' />
      <h4 className='w-[650px] text-[10px] font-medium text-[#828282] text-center'>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4>
      <div className='flex gap-5 mt-10'>
        <Card cardImg='card1' />
        <Card cardImg='card2' />
      </div>
    </section>
  )
}

export default BlogSection