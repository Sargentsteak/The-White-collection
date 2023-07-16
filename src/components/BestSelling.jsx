import React from 'react';
import Basket from "../assets/basket.svg"
import Search from "../assets/search.svg"
import Compare from "../assets/compare.svg"
import data from "../data"
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const BestSelling = () => {

    const { increase, cart } = useGlobalContext()
    console.log(cart);
    return (
        <div className="best-selling p-10 h-fit">
            <div className="best-selling-header flex items-center justify-between py-10">
                <h1 className="lg:text-6xl sm:text-4xl text-4xl mr-10">Best Selling</h1>
                <p className="md:text-lg text-base text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
                {data.map(e => {
                    const { id, title, price, img } = e
                    return (
                        <div className="best-selling-card group" key={id}>
                            <div className="best-selling-image relative">
                                <Link to={`/product/${id}`}>
                                    <img src={img} alt="" />
                                </Link>
                                <div className="tooltips group-hover:scale-100">
                                    <div className="basket">
                                        <img
                                            src={Basket}
                                            alt="" 
                                            onClick={() => increase(id)}
                                        />
                                    </div>
                                    <div className="search">
                                        <img src={Search} alt="" />
                                    </div>
                                    <div className="compare">
                                        <img src={Compare} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="accessory-details">
                                <a className="items-center" href="/">
                                    <h1 className="text-xl mr-8 text-gray-500">{title}</h1>
                                    <p className="text-xl">$ {price}</p>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default BestSelling;

