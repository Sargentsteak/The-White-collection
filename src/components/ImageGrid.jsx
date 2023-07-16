import React from 'react';
import GridImg1 from "../assets/grid-images/grid-img1.jpg"
import GridImg2 from "../assets/grid-images/grid-img2.jpg"
import GridImg3 from "../assets/grid-images/grid-img3.jpg"
import GridImg4 from "../assets/grid-images/grid-img4.jpg"
import GridImg5 from "../assets/grid-images/grid-img5.jpg"
import GridImg6 from "../assets/grid-images/grid-img6.jpg"

const ImageGrid = () => {
    return (
        <div className="image-grid h-fit sm:p-20 p-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
                <div className="grid grid-cols-3 row-span-2 col-span-2">
                    <div>
                        <img src={GridImg1} alt="" />
                    </div>
                    <div>
                        <img src={GridImg2} alt="" />
                    </div>
                    <div>
                        <img src={GridImg3} alt="" />
                    </div>
                    <div>
                        <img src={GridImg4} alt="" />
                    </div>
                    <div>
                        <img src={GridImg5} alt="" />
                    </div>
                    <div>
                        <img src={GridImg6} alt="" />
                    </div>
                </div>
                <div className="grids-text lg:row-span-2 lg:col-span-1 sm:col-span-2 col-span-2 flex flex-col justify-center lg:text-justify text-center">
                    <span className="lg:text-6xl sm:text-5xl text-3xl mb-10">Vintage Style</span>
                    <span className="lg:text-xl text-xl text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</span>
                    <span className="text-right text-3xl mt-10">___ #Lusiontheme</span>
                </div>
            </div>
            
        </div>
    )
};

export default ImageGrid;

