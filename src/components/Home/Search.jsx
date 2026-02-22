import React from 'react'

function Search() {
  return (
    <div className=' flex flex-col md:flex-row md:w-250 w-70  h-90 md:h-30 bg-white shadow-2xl ml-55 md:ml-50 rounded-2xl gap-2 md:gap-20 '>
        <div className='flex flex-col mt-8 ml-4 '>
            <label className='text-black font-semibold mb-1 ml-1'>Location</label>
            <input className='w-50 bg-gray-200 rounded-2xl pl-2' type="text" placeholder='Enter Destination'/>
        </div>

        <div className='flex flex-col mt-8 ml-4 md:ml-0'>
            <label className='text-black font-semibold mb-1 ml-1'>Distance</label>
            <input className='w-50 bg-gray-200 rounded-2xl pl-2' type="text" placeholder='Enter Distance'/>
        </div>

        <div className='flex flex-col mt-8 ml-4 md:ml-0'>
            <label className='text-black font-semibold mb-1 ml-1'>Price Range</label>
            <input className='w-50 bg-gray-200 rounded-2xl pl-2' type="text" placeholder='$10 - $500'/>
        </div>

        <button className='ml-17 md:ml-0 bg-blue-400 w-30 hover:bg-blue-500 h-9 text-white font-bold text-md rounded-full mt-5 md:mt-11 cursor-pointer '>Search</button>
    </div>
  )
}

export default Search
