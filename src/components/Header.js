import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
      <header className='bg-[#064094] pt-2'>
       <div className='flex justify-between items-center'>
        <div className=''>
            <a href="#"> <img src={logo} className='w-auto h-[70px] max-w-full' alt="" /> </a>
        </div>
        <div>
            <ul className='-ml-[5px] -mr-[5px]'>
               <li className='px-[5px] inline-block'>
            <a href="#" className='border border-white text-white px-[10px] py-[5px] text-[14px] leading-normal rounded-[4px]'>Login</a>
               </li>
               <li className='px-[5px] inline-block'>
            <a href="#" className=' bg-[#0e3c3c] border-white text-white px-[10px] py-[5px] text-[14px] leading-normal rounded-[4px]'>Register</a>
               </li>
            </ul>
        </div>
       </div>

      </header>
    </div>
  )
}

export default Header
