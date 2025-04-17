import React from 'react';

const ProductCard = ({ product }) => {
return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
        <h2 className="text-lg font-semibold text-text">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 text-green-600 font-bold">${product.price}</p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-secondary">Add to Cart</button>
    </div>
    </div>
);
};

export default ProductCard;
