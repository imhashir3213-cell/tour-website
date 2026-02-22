import React from 'react'
function Card({image,text , detail ,index}) {
  return (
    <div className='h-70 w-60 bg-white rounded-xl shadow-2xl'>
            <img src={image} alt=""  className= ' shadow-xl w-full h-35 rounded-t-xl'/>
            <div className=''>
                <h1 className='font-bold text-black text-center mt-1'>{text}</h1>
                <h1 className='font-bold text-2xl ml-4 text-center '>{index}</h1>
                <p className='mt-2 text-center font-semibold text-md'>{detail}</p>
                
            </div>
    </div>
  )
}

export default Card
