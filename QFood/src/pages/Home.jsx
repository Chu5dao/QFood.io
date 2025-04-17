import React from 'react';
import ProductCard from '../components/ProductCard';
import HomeSlider from '../components/HomeSlider';
import CategoryList from '../components/CategoryList';

const Home = () => {
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
    { id: 10, name: 'Burger', description: 'Juicy beef burger', price: 10, image: '/images/categoryList.jpeg' },

    // Thêm các sản phẩm khác ở đây
];

return (
    <div className="container mx-auto px-4 py-8">
    <HomeSlider />
    <CategoryList />
    <hr className="my-8 border-t border-gray-300" />
    <h1 className="text-3xl font-bold mb-8">Popular Foods</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
    <div className="mt-12 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">For Better Experience Download QFood App</h2>
        <div className="flex justify-center space-x-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="https://assets.grab.com/wp-content/uploads/media/footer/GooglePlay.png" alt="Get it on Google Play" className="h-12" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="https://assets.grab.com/wp-content/uploads/media/footer/AppStore.png" alt="Download on the App Store" className="h-12" />
            </a>
        </div>
    </div>
    </div>
);
};

export default Home;
