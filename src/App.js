import React, { useState, useEffect } from "react"
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { Route, Routes } from "react-router-dom";

function App() {
    
    const [isOpen, setIsOpen] = useState(false) 
    const [cartIsOpen, setCartIsOpen] = useState(false) 
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const cartToggle = () => { 
        setCartIsOpen(!cartIsOpen)
    }
    
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })

    return (
        <>
            <Navbar toggle={toggle} cartToggle={cartToggle} cartIsOpen={cartIsOpen} />
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Routes>
                <Route exact path="/" element={<Hero cartToggle={cartToggle}/>} />
                <Route exact path="/product/:id" element={<ProductPage />} />
            </Routes>
        </>
    )
}

export default App;