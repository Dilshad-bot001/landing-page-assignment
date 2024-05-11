import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    title: 'Best Design and delivered in time',
    desc: 'Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.',
    name: 'Mansur',
    work: 'CEO @ airbnb'
  },
  {
    title: 'Best Design and delivered in time',
    desc: 'Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.',
    name: 'Mansur',
    work: 'CEO @ airbnb'
  },
  {
    title: 'Best Design and delivered in time',
    desc: 'Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.',
    name: 'Mansur',
    work: 'CEO @ airbnb'
  }
]

const TestimonialSection = () => {

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='testimonials' className='-mt-40 flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-[#313131]'>What Customers say</h1>
      <div className='w-32 h-[2px] bg-[#F78430] rounded-full mt-3 mb-5' />
      <h4 className='w-[650px] text-[10px] font-medium text-[#828282] text-center'>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4>
      <div className='mt-10 w-[1080px] h-[400px] bg-[#F78430]'>        
        <Slider {...settings}>
          {
            testimonials.map(testimonial => (
              <div key={testimonial.name} className='max-w-[700px] h-[260px] bg-white border border-[#DEDEDE mt-10 ml-[185px]'>
                <div className='flex flex-col items-center justify-center pt-10'>
                <h2 className='text-[10px] text-[#313131] font-medium'>{testimonial.title}</h2>
                <p className='w-[500px] text-[10px] text-[#828282] font-normal my-5 text-center'>{testimonial.desc}</p>
                <div>⭐⭐⭐⭐⭐</div>
                <h2 className='text-[8px] text-[#313131] font-medium mt-3 mb-2'>{testimonial.name}</h2>
                <h4 className='text-[10px] text-[#828282] font-medium'>{testimonial.work}</h4>
                </div>
              </div>
            ))
          }
        </Slider>        
      </div>
    </section>
  )
}

export default TestimonialSection