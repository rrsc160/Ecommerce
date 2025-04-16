import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className="text-2xl font-medium">
                        E-Store
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex space-x-6'>
                    <Link to="/collections/men" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Men
                    </Link>
                    <Link to="/collections/women" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Women
                    </Link>
                    <Link to="/collections/top-wear" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Top Wear
                    </Link>
                    <Link to="/collections/bottom-wear" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                        Bottom Wear
                    </Link>
                </div>

                {/* Icons and Search */}
                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 bg-rabbit-red text-white 
                            text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>
                    <button className='md:hidden' onClick={toggleNavDrawer}>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation Placeholder */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/2`}>
                {/* You can put mobile menu items here */}
            </div>
        </div>
    )
}

export default Navbar;
