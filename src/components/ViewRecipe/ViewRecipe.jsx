import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';



const ViewRecipe = () => {
   
    const viewrecipe = useLoaderData();
    console.log(viewrecipe);
    const { id, chefName, picture, numRecipes, yearsOfExperience, likes, cookingMethod, description, ingredients,recipes,  rating, recipeName } = viewrecipe;
    return (
        <div>
            <div className='grid grid-cols-2 items-center gap-8 bg-gray-300 mx-20 my-16 p-8 rounded-md '>
                <div>
                    <h1 className='text-center text-5xl font-semibold mb-2'>{chefName}</h1>
                    <p className='text-center'><small>{description}</small></p>
                    <p className='text-3xl text-center font-medium mt-2 mb-2'>Experience: {yearsOfExperience} Years</p>
                    <p className='text-3xl text-center font-medium'>Recipes Number: {numRecipes} Items</p>
                    <div className='flex items-center gap-5 justify-center mt-2'>
                        <p className='text-5xl font-semibold'> <FaRegThumbsUp></FaRegThumbsUp></p>
                        <p className='text-3xl font-medium'>{likes}</p>
                    </div>
                </div>
                <div>
                    <img className='rounded-md' src={picture} alt="Chef image" />
                </div>

            </div>

            <div className=' flex gap-3 justify-center mb-20 rounded-md'>
                {
                    recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ViewRecipe;