import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCard = ({ chefrecipe }) => {
    
    const { id, chefName, picture, numRecipes, yearsOfExperience, likes } = chefrecipe;
    return (
        <div>
            <div className=" bg-base-100 shadow-xl">
                <figure><img className='rounded-md' src={picture} alt="chef image" /></figure>

                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{yearsOfExperience} Years Experience</p>
                    <p>Recipes Number: {numRecipes}</p>
                    <div className=" flex items-center justify-between">
                        <div className='flex items-center gap-3'>
                            <p className='text-blue-500 text-3xl'> <FaRegThumbsUp></FaRegThumbsUp></p>
                            <p className='text-2xl'>{likes} </p>
                        </div>

                        <Link to={`/viewrecipe/${id}`}><button className="btn btn-primary">View Recipe</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeCard;