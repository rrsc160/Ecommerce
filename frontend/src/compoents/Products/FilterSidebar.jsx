import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Black", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen"];
    const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashioninsta", "ChicStyle"];
    const genders = ["Men", "Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice ? Number(params.minPrice) : 0,
            maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
        });
    }, [searchParams]);

    const handleCheckboxChange = (type, value) => {
        const existing = filters[type];
        let updated;

        if (existing.includes(value)) {
            updated = existing.filter(item => item !== value);
        } else {
            updated = [...existing, value];
        }

        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            [type]: updated.join(",")
        });
    };

    const handleRadioChange = (type, value) => {
        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            [type]: value
        });
    };

    const handlePriceSliderChange = (e, type) => {
        const newValue = e.target.value;
        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            [type]: newValue
        });
    };

    return (
        <div className='p-4'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

            {/* Category filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Category</label>
                {categories.map(category => (
                    <div key={category} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="category"
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                            checked={filters.category === category}
                            onChange={() => handleRadioChange("category", category)}
                        />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))}
            </div>

            {/* Gender filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Gender</label>
                {genders.map(gender => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="gender"
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                            checked={filters.gender === gender}
                            onChange={() => handleRadioChange("gender", gender)}
                            
                        />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map(color => {
                        const isSelected = filters.color === color;
                        return (
                            <div
                                key={color}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer 
                        ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                onClick={() => handleRadioChange("color", color)}
                                title={color}
                            />
                        );
                    })}
                </div>
            </div>


            {/* Size filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Size</label>
                {sizes.map(sz => (
                    <div key={sz} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                            checked={filters.size.includes(sz)}
                            onChange={() => handleCheckboxChange("size", sz)}
                        />
                        <span className='text-gray-700'>{sz}</span>
                    </div>
                ))}
            </div>

            {/* Material filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Material</label>
                {materials.map(mat => (
                    <div key={mat} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                            checked={filters.material.includes(mat)}
                            onChange={() => handleCheckboxChange("material", mat)}
                        />
                        <span className='text-gray-700'>{mat}</span>
                    </div>
                ))}
            </div>

            {/* Brand filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Brand</label>
                {brands.map(brand => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                            checked={filters.brand.includes(brand)}
                            onChange={() => handleCheckboxChange("brand", brand)}
                        />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range Slider */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Price Range: ${filters.minPrice} - ${filters.maxPrice}</label>
                <div className='flex flex-col space-y-2'>
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>${filters.minPrice}</span>
                        <span>${filters.maxPrice}</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.minPrice}
                        onChange={(e) => handlePriceSliderChange(e, 'minPrice')}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.maxPrice}
                        onChange={(e) => handlePriceSliderChange(e, 'maxPrice')}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
