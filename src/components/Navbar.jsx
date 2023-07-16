import React from 'react';
import Search from "../assets/navbar-icons/search.svg"
import User from "../assets/navbar-icons/user.svg"
import Wishlist from "../assets/navbar-icons/wishlist.svg"
import CartIcon from "../assets/navbar-icons/cart.svg"
import { useGlobalContext } from '../context';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle, cartToggle, cartIsOpen }) => {

    const { amount } = useGlobalContext();

    return (
        <div className="navbar h-20 flex sm:justify-around justify-between items-center bg-transparent px-5 fixed w-full top-0 left-0 z-10">
            <div className="navbar-links">
                <ul className="nav-links xl:flex hidden">
                    <select className="mr-5 drop" name="USD" id="">
                        <option value="USD">USD</option>
                        <option value="USD">INR</option>
                        <option value="USD">EUR</option>
                    </select>
                    <li className="mr-8">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-8">
                        <Link to="/">Shop</Link>
                    </li>
                    <li className="mr-8">
                        <Link to="/">Product</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-logo flex flex-wrap justify-center items-center">
                <h1 className="nav-logo-image">
                    <a href="/">
                        <img className="h-8" src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/Logo2.png?v=1605760886" alt="Navbar-Logo" />
                    </a>
                </h1>
            </div>
            <div className="navbar-icons xl:flex justify-end hidden">
                <ul className="xl:flex justify-around hidden">
                    <li className='mr-8'>Pages</li>
                    <li className='mr-8'>Elements</li>
                    <li className='mr-8'>Blog</li>
                </ul>
                <div className="navbar-icons-search">
                    <img className="mr-8 cursor-pointer" src={Search} alt="" />
                </div>
                <div className="navbar-icons-user">
                    <img className="mr-8 cursor-pointer" src={User} alt="" />
                </div>
                <div className="navbar-icons-wishlist">
                    <img className="mr-8 cursor-pointer" src={Wishlist} alt="" />
                </div>
                <div className="navbar-icons-cart relative block" onClick={cartToggle}>
                    <img className="mr-8 cursor-pointer" src={CartIcon} alt="" />
                    <div className="cart-counter">
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
            <div className="navbar-toggler xl:hidden block" onClick={ toggle }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" fill="#000"/>
                </svg>
            </div>
            <Cart cartToggle={cartToggle} cartIsOpen={cartIsOpen}/>
        </div>
    )
};

export default Navbar;
