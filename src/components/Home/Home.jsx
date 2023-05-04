import React, { useContext } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';
import SectionOne from '../SectionOne/SectionOne';
import { AuthContext } from '../../Providers/AuthProviders';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    const chefrecipes = useLoaderData();
    const {loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress progress-primary w-56" value="40" max="100"></progress>
    }
    return (
        <div className='my-10'>
            <div className='lg:grid grid-cols-2 lg:mx-20 items-center gap-5 p-2'>
                <div>
                    <h1 className='text-center text-6xl font-semibold'>Welcome to my</h1>
                    <h1 className='text-center text-6xl font-semibold text-sky-600'>TextofFood</h1>
                    <p className=' mx-35 text-center '><small>It is fantastic house of testy food. Each item of food are very testy and not large amount of price. It is especially famous for meat curry.The dish typically consists of tender pieces of meat, such as beef, chicken, lamb, or goat, cooked in a rich and flavorful sauce made with various spices and herbs.</small></p>
                </div>
                <div>
                    <img className='rounded-xl' src="/images/img.jpg" alt="" />
                </div>
            </div>
            <h2 className='text-center text-4xl mt-10 mb-2 font-semibold'>Chef Information</h2> 
            <div  className='lg:grid grid-cols-3 lg:mx-20 mb-10 gap-10 h-full p-2'>
                {
                    chefrecipes&&chefrecipes?.map(chefrecipe => <HomeCard
                    key={chefrecipe.id}
                    chefrecipe={chefrecipe}
                    ></HomeCard>)
                }
            </div>
            <div>
                
                <SectionOne></SectionOne>
                <SectionTwo></SectionTwo>
            </div>
        </div>
    );
};

export default Home;