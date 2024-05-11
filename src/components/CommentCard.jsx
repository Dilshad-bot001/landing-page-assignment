import React from 'react'

const CommentCard = ({ img, comment, name }) => {
  return (
    <div className='w-[240px] h-[100px] flex bg-white p-3 rounded-xl border border-[#F0F0F0]'>
      <img src={img} alt="image" className='w-10 h-10' />
      <div className='flex flex-col ml-3'>
        <h2 className='text-[10px] text-[#313131] font-normal'>{comment}</h2>
        <h4 className='text-[8px] text-[#828282] font-semibold mt-2'>{name}</h4>
      </div>
    </div>
  )
}

export default CommentCard