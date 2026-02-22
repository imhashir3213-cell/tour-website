import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { motion } from 'motion/react';
function Navbar() {
  const [menu , setMenu] = useState(false)
    const handleMenu = () =>{
        setMenu(!menu)
        

    }
  return (
    <div className='flex justify-between items-center h-20 '>
      <a href="#" className='ml-10 md:ml-20 text-xl font-bold text-white'>TourWeb</a>
        < div 
            className='hidden mr-20 font-semibold text-sm  text-white md:flex justify-end gap-10 items-center'>
            <motion.a  whileTap={{scale: 1.5}} href="#" className='border-blue-700 hover:border-b-3 '>Home</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#packages" className='border-blue-700 hover:border-b-3 '>Packages</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#offers" className='border-blue-700 hover:border-b-3 '>Offers</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#why" className='border-blue-700 hover:border-b-3 '>Why Us ?</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#blog" className='border-blue-700 hover:border-b-3 '>Blog</motion.a>
            <button className='cursor-pointer hover:bg-blue-500 hover:border-none h-8 font-semibold text-white rounded-2xl w-20 bg-transparent border-2  border-black'>Login</button>
            <button className=' cursor-pointer h-8 hover:bg-blue-500 font-semibold text-white rounded-2xl w-20 bg-blue-400 '>Sign Up</button>
      </div>
     
      { menu && <div className='md:hidden space-y-2 flex a flex-col bg-blue-300 h-100 w-100 text-white mt-100 items-center justify-center gap-10' >
            <motion.a  whileTap={{scale: 1.5}} href="#" className='border-blue-700 hover:border-b-3 '>Home</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#packages" className='border-blue-700 hover:border-b-3 '>Packages</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#offers" className='border-blue-700 hover:border-b-3 '>Offers</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#why" className='border-blue-700 hover:border-b-3 '>Why Us ?</motion.a>
            <motion.a whileTap={{scale: 1.5}} href="#blog" className='border-blue-700 hover:border-b-3 '>Blog</motion.a>
      </div> 
      } 
      
      <button className='p-2 mr-5 text-white md:hidden 'onClick={handleMenu}>
        { menu && <h1 className='font-extrabold text-2xl'> X </h1>
        
        } 
        { !menu && <IoMenu size={30}   className='hover:text-gray-300 cursor-pointer'/>
        
        }  
      </button>
    </div>
  )
}

export default Navbar
