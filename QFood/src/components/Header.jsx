import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();

	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-2 flex items-center justify-between">
				<Link to="/" className="text-2xl font-bold text-primary">QFood™</Link>
				<nav className="flex-grow">
					<ul className="flex justify-center space-x-12">
						<li><Link to="/" className={`text-text hover:text-primary pb-2 ${location.pathname === '/' ? 'border-b-2 border-primary' : ''}`}>Home</Link></li>
						<li><Link to="/products" className={`text-text hover:text-primary pb-2 ${location.pathname === '/products' ? 'border-b-2 border-primary' : ''}`}>Products</Link></li>
						<li><Link to="/about" className={`text-text hover:text-primary pb-2 ${location.pathname === '/about' ? 'border-b-2 border-primary' : ''}`}>About</Link></li>
					</ul>
				</nav>
				<div className="flex items-center space-x-6">
					<button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
					<Link to="/cart" className="text-text hover:text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</Link>
					<Link to="/login" className="bg-gray-200 px-4 py-2 rounded-full text-text hover:bg-gray-300">Sign In</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;