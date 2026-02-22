import React from 'react'
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function Card({p}) {
  return (
    <div>
        <div className='flex flex-col w-80 h-102 shadow-2xl bg-white p-1  rounded-2xl'>
                <img src={p.image} alt=""  className='h-50 w-full rounded-2xl'/>
                <div className='flex flex-row justify-between mt-2'>
                    <h1 className='font-bold text-xl ml-3 mt-2 '>{p.price}</h1>
                    <h1 className='font-bold text-sm mt-2 mr-3 bg-gray-300 rounded-2xl w-18 pl-2 pt-1 text-blue-400'>For Rent</h1>
                </div>
                <div className='flex flex-row flex-wrap mt-2'>
                    <div className='flex gap-3 w-22 rounded-lg bg-gray-200 p-1 ml-3 mt-1'>
                            <FaBed size={20}/> <label className='text-xs mt-1'>3 Beds</label>
                    </div>
                    <div className='flex gap-3 w-22 rounded-lg bg-gray-200 p-1 ml-3 mt-1'>
                            <FaBath size={20}/> <label className='text-xs mt-1'>2 Bath</label>
                    </div>
                    <div className='flex gap-3 w-22 rounded-lg bg-gray-200 p-1 ml-3 mt-1'>
                            <FaWifi size={20}/> <label className='text-xs mt-1'>Wifi</label>
                    </div>
                    <div className='flex gap-3 w-60  rounded-lg bg-gray-200 p-1 ml-3 mt-3'>
                        <FaLocationDot size={20}/> <label className='text-xs mt-1'>{p.address}</label>
                    </div>
                    <button className='bg-blue-400 hover:bg-blue-500 rounded-2xl w-75 mt-3 font-bold text-white flex h-8 justify-center cursor-pointer ml-2 p-1'> View Details <FaArrowRightLong  size={16} className='ml-2 mt-1'/></button>
                </div>
      </div>
    </div>
  )
}

export default Card

