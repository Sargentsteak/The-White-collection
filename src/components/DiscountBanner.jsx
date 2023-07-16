import React from 'react';

const DiscountBanner = () => {
    return (
        <div className="h-fit px-10 py-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
                <div className="discount-banner h-fit col-span-2">
                    <div className="banner-inner py-20 sm:pl-10 pl-5 flex flex-col justify-start text-start">
                        <div className="banner-inner-title-1 sm:text-xl text-base tracking-widest font-light text-start">MERRY</div>
                        <div className="banner-inner-title-2 sm:text-5xl text-3xl">CHIRSTMAS</div>
                        <div className="banner-inner-title-subtitle sm:text-4xl text-2xl">40% OFF</div>
                        <a className="border-black border-2 w-32 text-center p-5 mt-10 hover:text-white hover:bg-black transition-all duration-300" href="/">Shop Now</a>
                    </div>
                </div>
                <div className="discount-offer h-fit lg:col-span-1 col-span-2">
                    <div className="flex flex-col justify-start text-start">
                        <div className="banner-inner py-20 sm:pl-10 pl-5 flex flex-col justify-start text-start">
                            <div className="banner-inner-title-1 sm:text-xl text-base tracking-widest font-light text-start">YOUR NEXT</div>
                            <div className="banner-inner-title-2 sm:text-5xl text-3xl">PURCHASE</div>
                            <div className="banner-inner-title-subtitle sm:text-4xl text-2xl">10% OFF</div>
                            <a className="border-black border-2 w-32 text-center p-5 mt-10 hover:text-white hover:bg-black transition-all duration-300" href="/">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DiscountBanner;
