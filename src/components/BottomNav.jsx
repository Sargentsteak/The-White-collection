import React from 'react';
import CartIcon from "../assets/navbar-icons/cart.svg"
import Wishlist from "../assets/navbar-icons/wishlist.svg"
import Settings from "../assets/settings.svg"
import { useGlobalContext } from '../context';

const BottomNav = ({cartToggle}) => {

    const { amount } = useGlobalContext();

    return (
        <div className="bottom-nav">
            <div className="xl:hidden fixed bg-white  bottom-0 left-0 w-full h-fit overflow-hidden">
                <div className="bottom-nav-icons flex justify-between items-center sm:p-5 p-4">
                    <div className="home">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgNy4wOTN2LTUuMDkzaC0zdjIuMDkzbDMgM3ptNCA1LjkwN2wtMTItMTItMTIgMTJoM3YxMGgxOHYtMTBoM3ptLTUgOGgtMTR2LTEwLjI2bDctNi45MTIgNyA2Ljk5djEwLjE4MnptLTUtMWgtNHYtNmg0djZ6Ii8+PC9zdmc+" alt="bottom-nav-home"/>
                    </div>
                    <div className="user">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuODIyIDE4LjA5NmMtMy40MzktLjc5NC02LjY0LTEuNDktNS4wOS00LjQxOCA0LjcyLTguOTEyIDEuMjUxLTEzLjY3OC0zLjczMi0xMy42NzgtNS4wODIgMC04LjQ2NCA0Ljk0OS0zLjczMiAxMy42NzggMS41OTcgMi45NDUtMS43MjUgMy42NDEtNS4wOSA0LjQxOC0zLjA3My43MS0zLjE4OCAyLjIzNi0zLjE3OCA0LjkwNGwuMDA0IDFoMjMuOTlsLjAwNC0uOTY5Yy4wMTItMi42ODgtLjA5Mi00LjIyMi0zLjE3Ni00LjkzNXoiLz48L3N2Zz4=" alt="bottom-nav-user" />
                    </div>
                    <div className="cart relative" onClick={cartToggle}>
                        <img src={CartIcon} alt="bottom-nav-home" />
                        <div className="bottom-nav-counter">
                            <p>{amount}</p>
                        </div>
                    </div>
                    <div className="wishlist">
                        <img src={Wishlist} alt="bottom-nav-home"/>
                    </div>
                    <div className="settings">
                        <img src={Settings} alt="bottom-nav-home"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BottomNav;
