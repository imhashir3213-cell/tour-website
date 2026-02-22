import React from 'react'
import CardBlog from './CardBlog'
import swat from '../../assets/BlogSwat.jpg'
import fairy from '../../assets/BlogFairy.jpg'
import skardu from '../../assets/BlogSkardu.jpg'
import park from '../../assets/BlogPark.jpg'
function Blog() {
  const  cardData =[
        {image: swat , heading : "Swat - The Switzerland Of Pakistan" , para :"A scenic valley with lush landscapes, crystal-clear rivers, and historical gems, offering adventure and cultural exploration in every corner."},
        {image: fairy , heading : "Serene Escape to Fairy Meadows" , para :"A lush green paradise at the foot of Nanga Parbat, perfect for camping under the stars with stunning views of snow-covered peaks."},
        {image: skardu , heading : "Mystical Beauty of Skardu" , para :"A breathtaking valley with turquoise lakes, majestic peaks, and historic forts, offering a serene and adventurous retreat in Gilgit-Baltistan."},
        {image: park , heading : "Hingol National Park – Nature’s Hidden Gem" , para :"A unique blend of mountains, beaches, and rock formations, featuring the iconic Princess of Hope and the serene Kund Malir Beach."}

    ]
  return (
    <div id='blog' className='w-screen h-dvh  mt-40'>
      <div className=' flex flex-col h-40 w-screen justify-center'>
            <h1 className='font-bold text-3xl text-center'>Our Best Blog ?</h1>
            <p className='text-gray-700 mt-2 text-center text-lg'>An insight to the incredible experience across Pakistan.</p>
      </div>
      <div className='flex flex-col  h-80'>
           <div className='flex flex-row flex-wrap h-50 w-dvw ml-50 mt-10 gap-30'>
                <CardBlog p={cardData[0]}/> 
                <CardBlog p={cardData[1]}/>
                
           </div>
           <div className='flex flex-row flex-wrap h-30 w-dvw  ml-50 mt-10 gap-30'>
                
                <CardBlog p={cardData[2]}/>
                <CardBlog p={cardData[3]}/>
           </div>
      </div>
    </div>
  )
}

export default Blog
