import React, { useEffect, useState, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../compoents/Products/FilterSidebar';
import SortOptions from '../compoents/Products/SortOptions';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                { _id: 1, name: "Product 1", price: 250, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
                { _id: 2, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
                { _id: 3, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
                { _id: 4, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=9" }] },
                { _id: 5, name: "Product 5", price: 100, images: [{ url: "https://picsum.photos/500/500?random=10" }] },
                { _id: 6, name: "Product 6", price: 100, images: [{ url: "https://picsum.photos/500/500?random=11" }] },
                { _id: 7, name: "Product 7", price: 100, images: [{ url: "https://picsum.photos/500/500?random=12" }] },
                { _id: 8, name: "Product 8", price: 100, images: [{ url: "https://picsum.photos/500/500?random=13" }] }
            ];
            setProducts(fetchProducts);
        }, 1000);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row'>
            <button
                onClick={toggleSidebar}
                className='lg:hidden border p-2 flex justify-center items-center'
            >
                <FaFilter className='mr-2' />
                Filter
            </button>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto 
                    transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>

            {/* Main Content */}
            <div className='flex-grow p-4'>

                {/* Collection Heading */}
                <h2 className='text-2xl uppercase mb-2'>All Collection</h2>

                {/* Sort Options directly below title */}
                <div className="mb-4">
                    <SortOptions />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map(product => (
                        <div key={product._id} className="border p-2 rounded shadow">
                            <img src={product.images[0].url} alt={product.name} className="w-full h-48 object-cover" />
                            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-700">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
