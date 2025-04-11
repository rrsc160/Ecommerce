import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';


const Navbar = () => {
    const [drawerOpen,setDrawerOpen] =useState(false);
    const [navDrawerOpen, setNavDrawerOpen]= useState(false);

    const toggleNavDrawer=()=>{
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer=()=>{
        setDrawerOpen(!drawerOpen)
    }

  return (
    <div>
        <nav className='container mx-auto flex item-center justify-between py-4 px-6'>
            <div>
                <Link to="/" className="text-2xl font-medium">
                Rabbit
                </Link>
            </div>
            <div className='hidden md:flex space-x-6'>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                 Men
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                 Women
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                 Top Wear
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                 Bottom Wear
                </Link>
            </div>
            <div className='flex item-center space-x-4'>
                <Link to="/profile" className='hover:text-black'>
                <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                </Link>
                <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-rabbit-red text-white 
                    text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                <div className='overflow-hidden'>
                <SearchBar/>
                </div>
                <button className='md:hidden'>
                    <HiBars3BottomRight className=' h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
        {/* mobile navigation */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/2`}></div>
    </div>
  )
}

export default Navbar