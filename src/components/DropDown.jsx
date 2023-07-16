import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({ isOpen, toggle }) => {
    return (
        <>
            <div
                className={
                    isOpen ?
                        "grid grid-rows-4 text-center items-center bg-black text-white mt-20" : "hidden"}
                onClick={toggle}>
                {/* <select className="bg-black items-center text-center" name="Home Layouts" id="">
                    <option value="USD">USD</option>
                    <option value="USD">INR</option>
                    <option value="USD">EUR</option>
                </select> */}
                <Link to="/" className="p-4">Home</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/" className="p-4">Contact</Link>
                <Link to="/about" className="p-4">About Us</Link>
                <Link to="/about" className="p-4">Pages</Link>
                <Link to="/about" className="p-4">Elements</Link>
                <Link to="/about" className="p-4">Blog</Link>
            </div>
        </>
    )
}

export default DropDown