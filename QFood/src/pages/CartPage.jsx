import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
const cartItems = [
    { id: 1, name: 'Pizza', price: 12 },
    { id: 2, name: 'Burger', price: 10 },
    // Thêm các mục giỏ hàng khác ở đây
];

return (
    <div className="container mx-auto px-4 py-8">
    <Cart items={cartItems} />
    </div>
);
};

export default CartPage;
