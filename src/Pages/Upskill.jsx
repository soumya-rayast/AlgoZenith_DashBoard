import React from 'react'
import { TiCalendarOutline } from "react-icons/ti";
import { IoBriefcaseOutline, IoClipboardOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaCode, FaRegCircleQuestion, FaRegClock } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { RiArrowUpWideLine } from "react-icons/ri";
import { BsPlayCircle } from "react-icons/bs";
const Upskill = () => {
  return (
    <div className='mx-2~'>
      {/* upper content */}
      <div className='flex items-center flex-wrap justify-between p-8 '>
        <div className='flex md:gap-6 p-2text-xs gap-2 bg-gradient-to-t from-white to-[#EFF5FF] rounded-md'>
          <div className='flex items-center justify-center gap-2  cursor-pointer'>
            <TiCalendarOutline />
            Mentor Sessions
          </div>
          <div className='flex items-center justify-center gap-2 cursor-pointer border-[1px] border-black rounded-md p-2 shadow-lg'>
            <IoBriefcaseOutline />
            Learning Material
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center mt-2 md:mt-0 border-[1px] cursor-pointer border-[rgba(164,230,255,1)] p-2 rounded-md gap-2'>
            <IoMdInformationCircleOutline />
            How it works
          </div>
        </div>
      </div>
      <hr className='bg-[rgba(164,230,255,1)]  mx-8' />
      {/* lower content */}
      <div className='md:flex md:flex-wrap p-4 items-start gap-4'>
        <div className='w-full md:w-[300px] mt-2'>
          <div className='bg-[#EFF5FF] gap-8 p-4 rounded-md flex items-center justify-between mb-2 cursor-pointer'>
            <p className='font-bold'>Chapter 1</p>
            <p className='text-[#608AD2] flex items-center gap-4'>
              <FaRegClock /> 05:00:00
            </p>
          </div>
          <div className='m-2 p-4 border-b border-[#8FDFFF] cursor-pointer'><p>Chapter 2</p></div>
          <div className='m-2 p-4 border-b border-[#8FDFFF] cursor-pointer'><p>Chapter 3</p></div>
          <div className='m-2 p-4 border-b border-[#8FDFFF] cursor-pointer'><p>Chapter 4</p></div>
          <div className='m-2 p-4 border-b border-[#8FDFFF] cursor-pointer'><p>Chapter 5</p></div>
        </div>

        <div className='w-full md:flex-1'>
          <div className='my-2 items-center justify-between shadow-md rounded-md p-4 border-[1px] border-[rgba(164,230,255,1)]'>
            <div>
              <div className='flex flex-wrap items-center justify-between'>
                <div className='flex flex-col mb-2 space-y-4'>
                  <p>PART 1</p>
                  <p className='font-bold'>Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className='text-[#17384D] flex flex-col '>
                  <div className='flex flex-wrap gap-2 '>
                    <p className='flex items-center gap-2 md:m-2'><FaRegClock className='text-[#17384D]' /> 02:00:00</p>
                    <p className='flex items-center gap-2 md:m-2'><IoClipboardOutline className='text-[#17384D]' /> Medium</p>
                    <p className='flex items-center gap-2 md:m-2'><FaRegCopy className='text-[#17384D]' /> 5</p>
                    <p className='flex items-center font-bold text-xl m-2'><RiArrowUpWideLine className='text-[#17384D]' /></p>
                  </div>
                  <div className='flex items-center justify-end md:ml-36 mb-2 border-[1px] p-2 w-fit cursor-pointer border-[#8FDFFF] bg-[rgba(255, 255, 255, 1)] rounded-md'>
                    <div className='text-right'>45% completed</div>
                  </div>
                </div>
              </div>
              <div className='border-b-8 rounded-sm bg-[rgba(239, 245, 255, 1)]'></div>
            </div>

            <div className='flex flex-col'>
              <div className='flex cursor-pointer items-center justify-between border-b-2 gap-4 mt-2 p-4'>
                <p className='flex gap-2 items-center font-bold'><BsPlayCircle className='text-[#17384D]' /> Video 1</p>
                <p className='text-[#17384D] flex items-center gap-2'><FaRegClock /> 10:00</p>
              </div>
              <div className='flex cursor-pointer items-center justify-between border-b-2 gap-4 mt-2 p-4'>
                <p className='flex gap-2 items-center font-bold'><FaRegCircleQuestion className='text-[#17384D]' /> Article 1</p>
                <p className='text-[#17384D] flex items-center gap-2'><FaRegClock /> 10:00</p>
              </div>
              <div className='flex cursor-pointer items-center justify-between border-b-2 gap-4 mt-2 p-4'>
                <p className='flex gap-2 items-center font-bold'><FaRegCircleQuestion className='text-[#17384D]' /> Quiz 1</p>
                <p className='text-[#17384D] flex items-center gap-2'><FaRegClock /> 10:00</p>
              </div>
              <div className='flex cursor-pointer items-center justify-between border-b-2 gap-4 mt-2 p-4'>
                <p className='flex gap-2 items-center font-bold'><FaCode className='text-[#17384D]' /> Coding Exercise 1</p>
                <p className='text-[#17384D] flex items-center gap-2'><FaRegClock /> 10:00</p>
              </div>
              <div className='flex cursor-pointer items-center justify-between gap-4 mt-2 p-4'>
                <p className='flex gap-2 items-center font-bold'><FaRegCopy className='text-[#17384D]' /> Combined Resource 1</p>
                <p className='text-[#17384D] flex items-center gap-2'><FaRegClock /> 10:00</p>
              </div>
            </div>
          </div>

          {/* Repeat for Part 2 and Part 3 */}
          <div className='my-2 items-center justify-between shadow-md rounded-md p-4 border-[1px] border-[rgba(164,230,255,1)]'>
            <div className='flex flex-wrap items-center justify-between'>
              <div className='flex flex-col mb-2'>
                <p>PART 2</p>
                <p className='font-bold'>Lorem Ipsum Dolor Sit Amet</p>
              </div>
              <div className='text-[#17384D] flex flex-col'>
                <div className='flex flex-wrap gap-2'>
                  <p className='flex items-center gap-2 md:m-2'><FaRegClock className='text-[#17384D]' /> 02:00:00</p>
                  <p className='flex items-center gap-2 md:m-2'><IoClipboardOutline className='text-[#17384D]' /> Medium</p>
                  <p className='flex items-center gap-2 md:m-2'><FaRegCopy className='text-[#17384D]' /> 12</p>
                  <p className='flex items-center font-bold text-xl m-2'><RiArrowUpWideLine className='text-[#17384D]' /></p>
                </div>
                <div className='flex md:ml-36 items-center justify-end mb-2 border-[1px] p-2 w-fit border-[#8FDFFF] bg-[rgba(255, 255, 255, 1)] rounded-md'>
                  <div>20% Completed</div>
                </div>
              </div>
            </div>
            <div className='border-b-8 rounded-sm bg-[rgba(239, 245, 255, 1)]'></div>
          </div>

          <div className='my-2 items-center justify-between shadow-md rounded-md p-4 border-[1px] border-[rgba(164,230,255,1)]'>
            <div className='flex flex-wrap items-center justify-between'>
              <div className='flex flex-col mb-2'>
                <p>PART 3</p>
                <p className='font-bold'>Lorem Ipsum Dolor Sit Amet</p>
              </div>
              <div className='text-[#17384D] flex flex-col'>
                <div className='flex flex-wrap gap-2'>
                  <p className='flex items-center gap-2 md:m-2'><FaRegClock className='text-[#17384D]' /> 02:00:00</p>
                  <p className='flex items-center gap-2 md:m-2'><IoClipboardOutline className='text-[#17384D]' /> Medium</p>
                  <p className='flex items-center gap-2 md:m-2'><FaRegCopy className='text-[#17384D]' /> 12</p>
                  <p className='flex items-center font-bold text-xl m-2'><RiArrowUpWideLine className='text-[#17384D]' /></p>
                </div>
                <div className='flex items-center md:ml-36 justify-end mb-2 border-[1px] p-2 w-fit border-[#8FDFFF] bg-[rgba(255, 255, 255, 1)] rounded-md'>
                  <div>0% Completed</div>
                </div>
              </div>
            </div>
            <div className='border-b-8 rounded-sm bg-[rgba(239, 245, 255, 1)]'></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Upskill;
