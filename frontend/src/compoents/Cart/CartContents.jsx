import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1"
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/id/237/200?random=1"
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2"
    }
  ];

  return (
    <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex gap-4 border-b pb-4 items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Size: {product.size} | Color: {product.color}
                </p>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                ${product.price * product.quantity}
              </p>
            </div>
            <div className="flex items-center mt-3 space-x-3">
              <button className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100">
                -
              </button>
              <span className="font-medium">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
                <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red 600'/>
            </button>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default CartContents;
