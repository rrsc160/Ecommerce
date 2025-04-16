import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: 12345,
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [
                        { name: "Product 1", image: "https://picsum.photos/500/500?random=1" },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
                {
                    _id: 54698,
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [
                        { name: "Product 2", image: "https://picsum.photos/500/500?random=2" },
                    ],
                    totalPrice: 100,
                    isPaid: false,
                },
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);

    const handleRowClick=(orderId)=>{
     navigate(`/order/${orderId}`)
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">My Orders</h2>

            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 uppercase text-xs sm:text-sm font-semibold tracking-wider">
                        <tr>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Created</th>
                            <th className="py-3 px-4">Shipping Address</th>
                            <th className="py-3 px-4">Items</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    onClick={()=> handleRowClick(order._id)}
                                    className="border-b hover:bg-gray-50 transition cursor-pointer"
                                >
                                    <td className="py-3 px-4">
                                        <img
                                            src={order.orderItems[0].image}
                                            alt={order.orderItems[0].name}
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />
                                    </td>

                                    <td className="py-3 px-4 font-medium text-gray-900">#{order._id}</td>

                                    <td className="py-3 px-4">
                                        <div>{new Date(order.createdAt).toLocaleDateString()}</div>
                                        <div className="text-xs text-gray-500">
                                            {new Date(order.createdAt).toLocaleTimeString()}
                                        </div>
                                    </td>

                                    <td className="py-3 px-4">
                                        {order.shippingAddress
                                            ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                                            : "N/A"}
                                    </td>

                                    <td className="py-3 px-4">{order.orderItems.length}</td>

                                    <td className="py-3 px-4 font-semibold">${order.totalPrice}</td>

                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium 
                                            ${order.isPaid
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}>
                                            {order.isPaid ? 'Paid' : 'Pending'}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="py-8 text-center text-gray-500">
                                    You have no orders.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyOrdersPage;
