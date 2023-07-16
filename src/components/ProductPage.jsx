import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Wishlist from "../assets/navbar-icons/wishlist.svg"
import data from "../data"
import { useState } from 'react';

const ProductPage = () => {

    const { increase, decrease, getTotals } = useGlobalContext();
    const [productAmount, setProductAmount] = useState(1)
    let { id } = useParams()
    id = parseInt(id, 10);

    return (
        <section className="text-gray-700 overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                {data.filter(e => e.id === id).map(e => {
                    const { id, title, price, img } = e
                    return (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap" key={id}>
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={img} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm text-gray-500 tracking-widest mb-5">Home/{title}</h2>
                                    <h1 className="text-gray-900 text-3xl title-font mb-5">{title}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                            <span className="text-gray-600 ml-3">4 Reviews</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-900 mb-5">$ { price }</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-8 py-5 items-center">
                                        <div className="product-amount col-span-1 flex justify-around items-center border-2 border-black">
                                            <div className="decrease align-left text-2xl border-r-2 border-black px-2">
                                            <button onClick={() => {
                                                decrease(id)
                                                setProductAmount(productAmount - 1)
                                            }}>-</button>
                                            </div>
                                            <div className="amount col-span-1 text-xl px-4">{productAmount}</div>
                                            <div className="increase text-2xl border-l-2 border-black px-2">
                                            <button onClick={() => {
                                                increase(id)
                                                setProductAmount(productAmount + 1)
                                            }}>+</button>
                                            </div>
                                        </div>
                                        <div className="add-btn col-span-1">
                                            <div className="flex justify-center text-center min-w-max bg-black text-white items-center py-5 px-10 cursor-pointer" onClick={() => getTotals(id)}>
                                                ADD TO CART
                                            </div>
                                        </div>
                                        <div className="wishlist-btn col-span-1 w-10 h-10 border-2 cursor-pointer flex justify-center items-center">
                                            <img src={Wishlist} alt="" />
                                        </div>
                                    </div>
                                <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="flex">
                                        <span className="mr-3">Color</span>
                                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default ProductPage;