import React from 'react'
import house1 from '../../assets/house1.png'
import house2 from '../../assets/house2.jpeg'
import house3 from '../../assets/house3.jpeg'
import Card from './Card'
function Offers() {

   const cards = [
        {image : house1 , price : "10000 pkr" , discout :"10%" , address: "45 Clifton Street, Karachi"},
        {image : house2 , price : "12000 pkr" , discout :"20%" , address: "78 Mall Road, Lahore"},
        {image : house3 , price : "25000 pkr" , discout :"30%" , address: "21 Saddar Avenue, Islamabad"},
    ]

  return (
    <div id='offers' className='h-dvh w-screen '>
      <div className='flex flex-col h-dvh w-screen'>
        <div className='flex flex-col items-center h-50 mt-13 text-white'>
            <h1 className='font-extrabold text-3xl text-black '>Special Offers</h1>
            <p className=' text-gray-700 mt-3'> Pack Your Bags with These Amazing Offers!</p>
        </div>

        <div className=' h-full w-screen'>
            <div className='flex flex-row gap-10 justify-center'>
                <Card p={cards[0]} />
                <Card p={cards[1]} />
                <Card p={cards[2]}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
