import React from 'react'

function CardBlog({p}) {
  return (
    <div className='flex flex-row h-50 w-120  gap-3'>

      <img src={p.image} alt="" className='h-40 w-40 rounded-2xl' />
      <div><h1 className='font-bold text-xl text-black'>{p.heading}</h1>
      <p className='text-gray-700 text-sm mt-1'>{p.para}</p>
      <a href=""  className='text-blue-500 font-bold mt-1 hover:text-blue-600'>Read More </a>
      </div>
    </div>
  )
}

export default CardBlog
