import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { motion } from 'motion/react'

function Home() {
  return (
    <div className='flex flex-col w-dvw h-dvh ' >

         <div  className='w-205 md:w-screen h-130 bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82dbd61a-d2d0-4c76-b90b-915417560ef0/d9812zn-cdfdfb9e-1ccf-4e31-8248-b0583fa19a50.jpg/v1/fill/w_1024,h_432,q_75,strp/austria_schnepfau_uwhd_21_9_2560x1080_wallpaper_by_aradilon_d9812zn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMyIiwicGF0aCI6IlwvZlwvODJkYmQ2MWEtZDJkMC00Yzc2LWI5MGItOTE1NDE3NTYwZWYwXC9kOTgxMnpuLWNkZmRmYjllLTFjY2YtNGUzMS04MjQ4LWIwNTgzZmExOWE1MC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tKF3IhVUYJqferuTrSwmvJQ7g6rR2HsWrUkBojJ6dm8)] bg-cover bg-center bg-no-repeat'  >
              <Navbar  />
              <div className=' w-screen flex flex-row justify-center mt-2 md:mt-8'>
                 <motion.h1 
                 className='text-xl ml-4 font-[poppins] md:text-5xl font-bold  text-center w-140'>Plan Your Travel With Us Now</motion.h1>
                  
              </div>

              <div className='text:md font-[poppins]  flex justify-center mt-3 font-bold text-black md:text-lg text-center w-dvw'>
                 <p className='w-60 md:w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus accusantium ullam dolores dolorem at dicta! Au
                 </p>
              </div>
              <div className='w-dvw flex justify-center mt-4 mb-4 md:mb-22'>
                <button className=' bg-blue-400 hover:bg-blue-500 font-bold w-30 h-10 cursor-pointer rounded-full text-white text-md'>Explore Now</button>
             </div>

                <Search/>
            
      </div>
    </div>
  )
}

export default Home

