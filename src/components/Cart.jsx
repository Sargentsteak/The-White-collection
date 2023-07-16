import React from 'react';
import Cross from "../assets/cross.svg"
import { useGlobalContext } from '../context';
import StripeCheckout from "react-stripe-checkout"
import axios from "axios";

const Cart = ({ cartIsOpen, cartToggle, clearCart }) => {

    const makePayment = async token => {
        const body = {
            token
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        return await axios.post("https://localhost:5000/payment", {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        })
        .then(res => {
            clearCart()
            console.log("RESPONSE", res)
            const { status } = res
            console.log("STATUS", status);
        })
        .catch(err => console.log(err))
    }
    const { cart, amount,total, increase, decrease,remove } = useGlobalContext();
    
    return (
        <div className={cartIsOpen ? "cart_toggle" : "hidden"}>
            <div className="cart-items-list bg-white">
                <div className="cart-close flex justify-between items-center h-24 p-5 bg-white" onClick={cartToggle}>
                    <h1 className='text-xl'>Shopping Cart ({amount}) </h1>
                    <img className="w-4 cursor-pointer" src={Cross} alt="" />
                </div>
                <div className="p-5">
                    {cart.filter(e => e.amount !== 0)
                        .map(e => {
                            const { id, img, title, amount, price } = e
                            return (
                                <div className="cart-items-inner" key={id}>
                                    <div className="cart-items flex">
                                        <div className="align-left">
                                            <div className="cart-image">
                                                <img className="w-28 h-28" src={img} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full sm:p-5 p-2">
                                            <div className="product-name flex justify-between items-center mb-8">
                                                <div className="cart-product-name">
                                                    {title}
                                                </div>
                                                <div className="delete-item cursor-pointer" onClick={() => remove(id)}>
                                                    <img className="w-4 h-4" src={Cross} alt="" />
                                                </div>
                                            </div>
                                            <div className="product-amount-price flex justify-between items-center">
                                                <div className="product-amount flex items-center border-2 border-black">
                                                    <div className="decrease text-2xl border-r-2 border-black px-2">
                                                        <button className="" onClick={() => decrease(id)}> - </button>
                                                    </div>
                                                    <div className="amount text-xl px-4">{amount}</div>
                                                    <div className="increase text-2xl border-l-2 border-black px-2">
                                                        <button onClick={() => increase(id)}> + </button>
                                                    </div>
                                                </div>
                                                <div className="product-price text-gray-500">$ {price}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-0.5 bg-gray-500 w-full"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className="total-checkout p-5 mt-10 flex justify-between text-gray-500">
                    <div className="total text-xl">Subtotal</div>
                    <div className="total-price text-2xl">$ {total}</div>
                </div>
                <div className="checkout-btn p-5 flex flex-col justify-between items-center">    
                <button className="w-full bg-black text-white py-5 mb-5 text-xl">
                    <StripeCheckout 
                        stripeKey="pk_test_51K6gQLSFdtUbPFxM0unbRXPsLKxVXbe8TJ47NSGxR6b9Mw0Y0oB9noxLJv9Kha7G18DZjTNcnzvLQScx1IMtvJoG00vlPZe3rO"
                        token={makePayment}
                        name="test"
                        amount={total * 100}>
                            Checkout    
                    </StripeCheckout>
                </button>
                <button className="w-full border bg-white py-5 text-xl">View Cart</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;
