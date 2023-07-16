import React from 'react';

const Footer = () => {
    return (
        <div className="footer sm:p-10 p-5">
            <div className="grid md:grid-cols-6 gap-8 mb-10">
                <div className="company-list col-span-1">
                    <h1 className="text-3xl mb-5">Company</h1>
                    <ul className="text-gray-500">
                        <li className='mb-5'>Contact</li>
                        <li className='mb-5'>About Us</li>
                        <li className='mb-5'>Store Locations</li>
                        <li className='mb-5'>Careers</li>
                    </ul>
                </div>
                <div className="help-list col-span-1">
                    <h1 className="text-3xl mb-5">Help</h1>
                    <ul className="text-gray-500">
                        <li className='mb-5'>Order Tracking</li>
                        <li className='mb-5'>FAQs</li>
                        <li className='mb-5'>Privacy Policy</li>
                        <li className='mb-5'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="company-list sm:col-span-1 col-span-2">
                    <h1 className="text-3xl mb-10">Follow Us</h1>
                    <h1 className="text-gray-500 mb-10">And get free shipping on all our Products</h1>
                </div>
                <div className="company-list col-span-3">
                    <h1 className="sm:text-2xl mb-10 text-lg">Sign up now & get 10% off</h1>
                    <h1 className="mb-5 text-gray-500">Be the first to know about out new arrivals and exculsive offers</h1>
                    <div className="footer-input grid sm:grid-cols-3 row-span-2 gap-8">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="footer-input-field sm:p-3 p-2 min-w-max col-span-2"
                        />
                        <div className="flex justify-center sm:col-span-1 col-span-2 sm:row-span-1 row-span-2 text-white text-center min-w-max bg-black items-center">SUBSCRIBE</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-gray-500 pb-10">
                <div className="flex">
                    <div className="mr-5">Privacy Policy</div>
                    <div>Terms & Conditions</div>
                </div>
                <div>
                    @2020 Lusion- ARJ's Theme
                </div>
            </div>
        </div>
    );
};

export default Footer