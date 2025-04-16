import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDeatilsPage = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // Mock Data — replace this with your real API call
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "PayPal",
            shippingMethod: "Standard",
            shippingAddress: {
                address: "123 Fashion Street",
                city: "New York",
                country: "USA",
            },
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    size: "M",
                    price: 150,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=1",
                },
                {
                    productId: "2",
                    name: "T-shirt",
                    size: "M",
                    price: 120,
                    quantity: 2,
                    image: "https://picsum.photos/150?random=2",
                }
            ]
        };
        setOrderDetails(mockOrderDetails);
    }, [id]);

    if (!orderDetails) {
        return (
            <div className="max-w-7xl mx-auto p-4 sm:p-6 text-center">
                <p className="text-lg">Loading order details...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-600">
                Order Details
            </h2>

            {/* Order Summary */}
            <div className="p-4 sm:p-6 rounded-lg border mb-8 shadow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg md:text-xl font-semibold">
                        Order ID: #{orderDetails._id}
                    </h3>
                    <p className="text-gray-600">
                        {new Date(orderDetails.createdAt).toLocaleString()}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold mb-1">Payment Status:</h4>
                        <p className={orderDetails.isPaid ? "text-green-600" : "text-red-600"}>
                            {orderDetails.isPaid ? "Paid" : "Pending"}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-1">Delivery Status:</h4>
                        <p className={orderDetails.isDelivered ? "text-green-600" : "text-yellow-600"}>
                            {orderDetails.isDelivered ? "Delivered" : "Not Delivered"}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-1">Payment Method:</h4>
                        <p>{orderDetails.paymentMethod}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-1">Shipping Method:</h4>
                        <p>{orderDetails.shippingMethod}</p>
                    </div>

                    <div className="sm:col-span-2">
                        <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">Shipping Information</h3>
                        <h4 className="font-semibold mb-1">Shipping Address:</h4>
                        <p>{orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
                    </div>
                </div>
            </div>

            {/* Ordered Items */}
            <div className="p-4 sm:p-6 rounded-lg border shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Ordered Items</h3>
                {orderDetails.orderItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center border-b py-4 last:border-b-0"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div className="flex-grow">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                            <p className="text-sm">Quantity: {item.quantity}</p>
                        </div>
                        <div className="font-semibold">${item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDeatilsPage;
