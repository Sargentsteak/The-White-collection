import React from 'react';

const TrendingOutfits = () => {
    return (   
        <div className="best-selling p-10 h-fit">
            <div className="best-selling-header flex items-center justify-between py-10">
                <h1 className="lg:text-6xl sm:text-4xl text-4xl mr-10">Trending Outfits</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <div className="best-selling-card">
                    <div className="best-selling-image">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Layer-14-2_540x.jpg?v=1613979537" alt="" />
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8">Billie Eilish M62</h1>
                            <p className="text-xl text-gray-500">Get the outfit now</p>
                        </a>
                    </div>
                </div>
                <div className="best-selling-card">
                    <div className="best-selling-image">
                        <a href="/">
                            <img src="	https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Layer-141-1000x1280_540x.jpg?v=1613978997" alt="" />
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8">Bershka Puffer Gilet</h1>
                            <p className="text-xl text-gray-500">Get the outfit now</p>
                        </a>
                    </div>
                </div>
                <div className="best-selling-card">
                    <div className="best-selling-image">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Untitled-2_c3deccf5-8c45-4eae-8ed0-63383cd413a0_540x.jpg?v=1613979779" alt="" /> 
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8">Bershka Puffer Gilet A3</h1>
                            <p className="text-xl text-gray-500">Get the outfit now</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TrendingOutfits;