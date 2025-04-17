import React from 'react';

const categories = [
{ name: 'Salad', image: '/images/categoryList.jpeg' },
{ name: 'Rolls', image: '/images/categoryList.jpeg' },
{ name: 'Deserts', image: '/images/categoryList.jpeg' },
{ name: 'Sandwich', image: '/images/categoryList.jpeg' },
{ name: 'Cake', image: '/images/categoryList.jpeg' },
{ name: 'Pure Veg', image: '/images/categoryList.jpeg' },
{ name: 'Pasta', image: '/images/categoryList.jpeg' },
{ name: 'Noodles', image: '/images/categoryList.jpeg' },
];

const CategoryList = () => {
return (
    <div className="category-list">
    <h2>Explore our menu</h2>
    <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
    <div className="category-items">
        {categories.map((category, index) => (
        <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
        </div>
        ))}
    </div>
    </div>
);
};

export default CategoryList;
