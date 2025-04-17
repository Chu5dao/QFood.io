import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
const products = [
    { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 12, image: '/images/categoryList.jpeg' },
    { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 3, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 4, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 5, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 6, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 7, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 8, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    { id: 9, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },
    // Thêm các sản phẩm khác ở đây
];

return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </div>
);
};

export default Products;
