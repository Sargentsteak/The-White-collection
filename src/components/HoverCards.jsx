import React from 'react';

const HoverCards = () => {
    return (
        <div className="p-20 accessories-section h-fit flex justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                <div className="accessory-card">
                    <a href="/">
                        <div className="accessory-image">
                            <img className='accessory-image-hover' src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-3_360x.jpg?v=1605751469" alt="" />
                        </div>
                    </a>
                    <div className="accessory-details">
                        <a className="flex items-center" href="/">
                            <h1 className="text-3xl mr-8">Clothing</h1>
                            <p className="text-xl">5 items</p>
                        </a>
                    </div>
                </div>
                <div className="accessory-card">
                    <div className="accessory-image">
                        <a href="/">
                            <img className='accessory-image-hover' src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-2_360x.jpg?v=1605751489" alt="" />
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="flex items-center" href="/">
                            <h1 className="text-3xl mr-8">Bag Brand</h1>
                            <p className="text-xl">20 items</p>
                        </a>
                    </div>
                </div>
                <div className="accessory-card">
                    <div className="accessory-image">
                        <a href="/">
                            <img className='accessory-image-hover' src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-1_360x.jpg?v=1605751503" alt="" />
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="flex items-center" href="/">
                            <h1 className="text-3xl mr-8">Accessories</h1>
                            <p className="text-xl">6 items</p>
                        </a>
                    </div>
                </div>
                <div className="accessory-card">
                    <div className="accessory-image">
                        <a href="/">
                            <img className='accessory-image-hover' src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-4_360x.jpg?v=1605751515" alt="" />
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="flex items-center" href="/">
                            <h1 className="text-3xl mr-8">Shoes</h1>
                            <p className="text-xl">8 items</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverCards;
// lg:columns-4 sm:columns-2 columns-1 gap-8 mx-auto