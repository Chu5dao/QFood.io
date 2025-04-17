import React from 'react';

const Footer = () => {
return (
    <footer className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-start py-8">
            <div className="w-3/5 pr-8">
                <h3 className="font-bold text-2xl mb-2">QFood™</h3>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet adipisci repellendus dolore molestias. Sequi, repellat reprehenderit natus esse iste quos quasi animi. Possimus, voluptatum temporibus? Praesentium hic voluptates blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum sunt explicabo libero, quaerat quam sequi placeat minima, quidem temporibus odio aperiam nesciunt numquam beatae, at est autem maxime magnam?</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="w-1/5 pl-4">
                <h4 className="font-bold text-lg mb-4">COMPANY</h4>
                <ul className="text-sm space-y-2">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About us</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Our team</a></li>
                </ul>
            </div>
            <div className="w-1/5 pl-4">
                <h4 className="font-bold text-lg mb-4">GET IN TOUCH</h4>
                <p className="text-sm mb-2">+1-234-5678-9012</p>
                <p className="text-sm mb-2">contact@yourwebsite.com</p>
                <p className="text-sm">123 Street, City, Country</p>
            </div>
        </div>
        <hr className="border-t border-background my-4" />
        <div className="container mx-auto text-center">
            <p>&copy; 2024 QFood™. All rights reserved.</p>
        </div>
    </footer>
);
};

export default Footer;
