import React from 'react';
import './SectonTwo.css';

const SectionTwo = () => {
    return (
        <div className='flex justify-center my-10 p-2'>
            <div>
                <h2 className='text-4xl text-center font-semibold mb-2'>Some Popular Food</h2>
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item image-size">
                        <img src="/images/crispy.jpg" className="rounded-box w-52 h-80" />
                    </div>
                    <div className="carousel-item image-size">
                        <img src="/images/kimbap.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item image-size">
                        <img src="/images/meat.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item image-size">
                        <img src="/images/rice.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item image-size">
                        <img src="/public/images/recipe.jpg" className="rounded-box" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionTwo;