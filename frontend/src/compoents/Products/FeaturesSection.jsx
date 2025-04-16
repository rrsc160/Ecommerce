import React from 'react';
import { HiShoppingBag, HiArrowPathRoundedSquare, HiOutlineCreditCard } from 'react-icons/hi2';

function FeaturesSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12">

                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="p-6 rounded-full bg-gray-100 mb-4 flex justify-center items-center shadow-md">
                        <HiShoppingBag className="text-3xl text-gray-700" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mb-2">
                        FREE INTERNATIONAL SHIPPING
                    </h4>
                    <p className="text-gray-600 text-sm tracking-tight">
                        On all orders over $100.00
                    </p>
                </div>

                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="p-6 rounded-full bg-gray-100 mb-4 flex justify-center items-center shadow-md">
                        <HiArrowPathRoundedSquare className="text-3xl text-gray-700" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mb-2">
                        45 DAYS RETURN
                    </h4>
                    <p className="text-gray-600 text-sm tracking-tight">
                        Money back guarantee
                    </p>
                </div>

                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="p-6 rounded-full bg-gray-100 mb-4 flex justify-center items-center shadow-md">
                        <HiOutlineCreditCard className="text-3xl text-gray-700" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mb-2">
                        100% SECURED CHECKOUT PROCESS
                    </h4>
                    <p className="text-gray-600 text-sm tracking-tight">
                        On all orders over $100.00
                    </p>
                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;
