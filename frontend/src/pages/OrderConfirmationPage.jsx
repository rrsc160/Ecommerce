import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const checkout = {
    _id: "12345",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Jacket",
            color: "black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: "2",
            name: "T-shirt",
            color: "black",
            size: "M",
            price: 120,
            quantity: 1,
            image: "https://picsum.photos/150?random=2",
        }
    ],
    shippingAddress: {
        address: "123 Fashion Street",
        city: "New York",
        country: "USA",
    },
};

const OrderConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { checkout: orderData } = location.state || { checkout };

    if (!orderData) {
        return (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-bold'>No order data found.</h2>
                <button
                    className='mt-6 bg-black text-white px-4 py-2 rounded'
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className='max-w-3xl mx-auto py-12 px-4'>
            <h1 className='text-3xl font-bold mb-6 text-center text-green-600'>
                Thank you for your order!
            </h1>

            <div className='bg-white shadow rounded p-6 mb-8'>
                <h2 className='text-xl font-semibold mb-2'>Order Details</h2>
                <p><strong>Order ID:</strong> {orderData._id}</p>
                <p><strong>Order Date:</strong> {new Date(orderData.createdAt).toLocaleDateString()}</p>
            </div>

            <div className='bg-white shadow rounded p-6'>
                <h2 className='text-xl font-semibold mb-4'>Items</h2>
                {orderData.checkoutItems.map((item, index) => (
                    <div key={index} className='flex items-center border-b py-4'>
                        <img src={item.image} alt={item.name} className='w-20 h-20 object-cover mr-4 rounded' />
                        <div className='flex-grow'>
                            <h3 className='font-semibold'>{item.name}</h3>
                            <p className='text-sm text-gray-600'>Size: {item.size} | Color: {item.color}</p>
                            <p className='text-sm'>Quantity: {item.quantity}</p>
                            <p className='font-semibold'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className='mt-8 w-full bg-black text-white py-3 rounded'
                onClick={() => navigate("/")}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderConfirmationPage;
