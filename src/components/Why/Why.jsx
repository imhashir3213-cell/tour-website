import React from 'react'
import location from '../../assets/location.jpeg'
import point3 from '../../assets/point3.jpg'
import customer from '../../assets/customer.png'
import night from '../../assets/night.mp4'
function Why() {
  return (
    <div id='why' className='h-dvh w-screen  '>
        <h1 className='font-extrabold text-3xl text-black text-center mt-10'>Why Choose Us</h1>
        <div className='flex flex-row  h-80 gap-10  w-screen  bg-white '>
            <div className='flex flex-col mt-10 ml-60'>
                <img src={location} alt="" className='h-40 w-40 rounded-2xl ml-18'/>
                <h1 className='font-bold text-lg mt-2 ml-5'>Explore Stunning Destinations</h1>
                <p className='font-semibold text-sm text-gray-600 w-80 text-center'>Discover breathtaking tourist attractions across Pakistan, from scenic valleys to vibrant cities.</p>
            </div>
            <div className='flex flex-col mt-10'>
                <img src={point3} alt="" className='h-40 w-40 rounded-2xl ml-18'/>
                <h1 className='font-bold text-lg mt-2 ml-15'>Hassle-Free Booking</h1>
                <p className='font-semibold text-sm text-gray-600 w-80 text-center'>Enjoy a simple and user-friendly booking experience with secure payment options.</p>
            </div>
            <div className='flex flex-col mt-10'>
                <img src={customer} alt="" className='h-40 w-40 rounded-2xl ml-18'/>
                <h1 className='font-bold text-lg mt-2 ml-5'>Unmatched Customer Support</h1>
                <p className='font-semibold text-sm text-gray-600 w-80 text-center'>Our dedicated team is here to assist you every step of your journey.</p>
            </div>
        </div>

        <div className=' w-dvw h-90'>
            <div className='flex flex-row bg-blue-900 h-80 w-250 ml-50 mt-10'>
                <div className='flex flex-col w-100 mt-10 '>
                    <h1 className='font-bold text-lg text-white ml-10'>Have a Wonderfull experience with Us</h1>
                    <p className='  text-sm ml-10 mt-3 text-gray-200'>A touring company offers personalized travel experiences, guiding tourists to explore new destinations, discover local cultures, and enjoy hassle-free journeys.From curated itineraries to comfortable transportation and expert guides, such companies ensure memorable adventures tailored to the needs and preferences of travelers.</p>
                </div>
                <div className='h-57 w-100 mt-8 ml-10 border-2 border-white rounded-xl'>
               <video  className='rounded-xl' autoPlay loop muted playsInline controls={false}>
                      <source src={night} type="video/mp4" />
              </video> </div>

            </div>
        </div>
      
    </div>
  )
}

export default Why
