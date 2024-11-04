import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineChartBar } from "react-icons/hi";
import { IoClipboardOutline, IoMenu } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[#172B4D]  px-4'>
        <div className='flex items-center  gap-4 mb-7 font-bold text-[18px]'>
          <IoMenu title="Menu" aria-label="Menu" />
          <p>AlgoZenith</p>
        </div>
        <NavLink 
          to='/' 
          className={({ isActive }) => `flex items-center gap-4 font-semibold  cursor-pointer ${isActive ? 'bg-[ rgba(214, 244, 255, 1)] ' : ''}`}>
          <RxDashboard />
          <p>Dashboard</p>
        </NavLink>
        <NavLink 
          to='/learn' 
          className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214, 244, 255, 1)]  ' : ''}`}>
          <HiOutlineLightBulb />
          <p>Learn</p>
        </NavLink>
        <NavLink 
          to='/forums' 
          className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214, 244, 255, 1)]  ' : ''}`}>
          <HiOutlineUserGroup />
          <p>Forums</p>
        </NavLink>
        <NavLink 
          to='/upskill' 
          className={({ isActive }) => `flex items-center gap-4  text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214, 244, 255, 1)] ' : ''}`}>
          <IoClipboardOutline />
          <p>Upskill</p>
        </NavLink>
        <NavLink 
          to='/contest'  
          className={({ isActive }) => `flex items-center gap-4 text-black font-semibold cursor-pointer ${isActive ? 'bg-[rgba(214, 244, 255, 1)]  ' : ''}`}>
          <HiOutlineChartBar />
          <p>Contest</p>
        </NavLink>
        <NavLink 
          to='/leaderboard' 
          className={({ isActive }) => `flex items-center gap-4  text-black font-semibold  cursor-pointer ${isActive ? 'bg-[rgba(214, 244, 255, 1)]  ' : ''}`}>
          <CiStar />
          <p>Leaderboard</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
