
import React from 'react'
import {TbBrandMeta} from "react-icons/tb";
import {IoLogoInstagram} from "react-icons/io";
import {RiTwitterLine} from "react-icons/ri";

const TopBar = () => {
  return (
    <div className='bg-rabbit-pink  text-white'>
        <div className='container mx-auto flex justify-between item-center py-3 py-4'>
            <div className='hidden md:flex items-center space-x-4'>
                 <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                    <RiTwitterLine className='h-4 w-4'/>
                    </a>   
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>We ship worldwide- Fast and reliable shipping!</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="tel:+123456454" className='hover:text-gray-300'>
                    +1 (234)567-890
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar