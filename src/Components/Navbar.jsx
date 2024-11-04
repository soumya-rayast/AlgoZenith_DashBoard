import React from 'react'
// import { IoMenu } from "react-icons/io5";
import { HiBell } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className='flex  items-center justify-end w-full '>
      <div className='flex gap-4 items-center justify-center'>
        <HiBell className='bg-[#E7F8FF] w-[35px] h-[35px] p-2 text-[#172B4D] rounded-md' />
        <div className='w-[40px] h-[40px] bg-[#D9D9D9] rounded-full'></div>
      </div>
    </div>
  )
}

export default Navbar