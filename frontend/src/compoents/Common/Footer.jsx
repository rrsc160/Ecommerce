import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiPhoneCall } from "react-icons/fi";
import { TbBrandMeta } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t bg-white pt-12 pb-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 lg:px-0">
                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
                    <p className="text-gray-500 mb-3 leading-relaxed">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p className="font-medium text-sm text-gray-600 mb-6">
                        Sign up and get 10% off your first order.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow p-3 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Shop Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">Men's Top Wear</Link></li>
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">Women's Top Wear</Link></li>
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">Men's Bottom Wear</Link></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">Contact Us</Link></li>
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">About Us</Link></li>
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">FAQ's</Link></li>
                        <li><Link to="#" className="hover:text-gray-400 transition-colors">Features</Link></li>
                    </ul>
                </div>

                {/* Follow Us & Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            <IoLogoInstagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            <RiTwitterXLine className="h-5 w-5" />
                        </a>
                        <a
                            href="https://meta.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition"
                        >
                            <TbBrandMeta className="h-5 w-5" />
                        </a>
                    </div>
                    <p className="text-gray-500">Call Us</p>
                    <p className="mt-1 text-gray-700 flex items-center">
                        <FiPhoneCall className="mr-2" /> 02566-226618
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-12 border-t border-gray-200 pt-6 px-4 lg:px-0">
                <p className="text-gray-500 text-sm text-center tracking-tight">
                    &copy; 2025, CompileTab. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
