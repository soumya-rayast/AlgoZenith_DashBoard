import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineChartBar } from "react-icons/hi";
import { IoClipboardOutline, IoMenu } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:w-[18%] min-h-screen'>
      {/* Desktop Menu */}
      <div className='md:flex flex-col gap-4 pt-6 pl-[20%] text-[#172B4D] hidden px-4'>
        <div className='flex items-center gap-4 mb-7 font-bold text-[18px] cursor-pointer'>
          <IoMenu title="Menu" aria-label="Menu" />
          <p>AlgoZenith</p>
        </div>
        <NavLink to='/dashboard' className={({ isActive }) => `flex items-center gap-4 font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <RxDashboard />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to='/learn' className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <HiOutlineLightBulb />
          <p>Learn</p>
        </NavLink>
        <NavLink to='/forums' className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <HiOutlineUserGroup />
          <p>Forums</p>
        </NavLink>
        <NavLink to='/' className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <IoClipboardOutline />
          <p>Upskill</p>
        </NavLink>
        <NavLink to='/contest' className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <HiOutlineChartBar />
          <p>Contest</p>
        </NavLink>
        <NavLink to='/leaderboard' className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
          <CiStar />
          <p>Leaderboard</p>
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <div className='md:hidden flex items-center justify-start text-2xl m-auto p-4'>
        <IoMenu onClick={toggleMenu} className='cursor-pointer' />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-4 pt-6 pl-6 text-[#172B4D] px-4 absolute bg-white min-h-screen shadow-md'>
          <div className='flex items-center gap-4 mb-7 font-bold text-[18px] cursor-pointer'>
            <IoMenu title="Menu" aria-label="Menu" onClick={toggleMenu} />
            <p>AlgoZenith</p>
          </div>
          <NavLink to='/dashboard' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4   font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md ' : ''}`}>
            <RxDashboard />
            <p>Dashboard</p>
          </NavLink>
          <NavLink to='/learn' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md ' : ''}`}>
            <HiOutlineLightBulb />
            <p>Learn</p>
          </NavLink>
          <NavLink to='/forums' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
            <HiOutlineUserGroup />
            <p>Forums</p>
          </NavLink>
          <NavLink to='/' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
            <IoClipboardOutline />
            <p>Upskill</p>
          </NavLink>
          <NavLink to='/contest' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
            <HiOutlineChartBar />
            <p>Contest</p>
          </NavLink>
          <NavLink to='/leaderboard' onClick={toggleMenu} className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214,244,255,1)] p-4 rounded-md' : ''}`}>
            <CiStar />
            <p>Leaderboard</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
