import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='mt-20 py-8 w-[80%] bg-[#F78430] flex flex-col items-center text-white'>
      <h1 className='text-4xl font-semibold'>Contact Us</h1>
      <h4 className='w-[450px] text-[10px] font-medium text-center mt-5 mb-5'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</h4>
      <form action="" className='flex flex-col items-start justify-between'>
        <label htmlFor="name" className='contact-label'>Name</label>
        <input type="text" name="name" id="name" className='contact-input' />
        <label htmlFor="email" className='contact-label'>Email</label>
        <input type="email" name="email" id="email" className='contact-input' />
        <label htmlFor="message" className='contact-label'>Message</label>
        <textarea name="message" id="message" rows={6} className='w-[340px] rounded-lg outline-none text-sm text-[#828282] p-5'></textarea>

        <button className='w-[100px] h-8 rounded-full mt-6 flex justify-center items-center text-sm bg-white text-[#FD900C] hover:drop-shadow-xl'>SEND</button>
      </form>
    </section>
  )
}

export default ContactSection