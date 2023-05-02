import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    const chefrecipes = useLoaderData();
    // console.log(chefrecipes);
    return (
        <div className='my-10'>
            <div className='grid grid-cols-2 mx-20 items-center gap-5'>
                <div>
                    <h1 className='text-center text-6xl font-semibold'>Welcome to my</h1>
                    <h1 className='text-center text-6xl font-semibold text-sky-600'>TextofFood</h1>
                    <p className=' mx-35 text-center '><small>It is fantastic house of testy food. Each item of food are very testy and not large amount of price. It is especially famous for meat curry.The dish typically consists of tender pieces of meat, such as beef, chicken, lamb, or goat, cooked in a rich and flavorful sauce made with various spices and herbs.</small></p>
                </div>
                <div>
                    <img className='rounded-xl' src="/images/img.jpg" alt="" />
                </div>
            </div>
            <div  className='grid grid-cols-3 m-20 gap-10 h-full'>
                {
                    chefrecipes&&chefrecipes?.map(chefrecipe => <HomeCard
                    key={chefrecipe.id}
                    chefrecipe={chefrecipe}
                    ></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;