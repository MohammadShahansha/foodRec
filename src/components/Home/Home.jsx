import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 mx-20 items-center'>
                <div>
                    <h1 className='text-center text-6xl font-semibold'>Welcome to my</h1>
                    <h1 className='text-center text-6xl font-semibold text-sky-600'>TextofFood</h1>
                    <p className=' mx-35 text-center '><small>It is fantastic house of testy food. Each item of food are very testy and not large amount of price. It is especially famous for meat curry.The dish typically consists of tender pieces of meat, such as beef, chicken, lamb, or goat, cooked in a rich and flavorful sauce made with various spices and herbs.</small></p>
                </div>
                <div>
                    <img className='rounded-xl' src="/images/img.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;