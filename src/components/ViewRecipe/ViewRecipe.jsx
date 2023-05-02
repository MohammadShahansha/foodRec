import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipe = () => {
    const viewrecipe = useLoaderData();
    console.log(viewrecipe);
    const { id, chefName, picture, numRecipes, yearsOfExperience, likes, cookingMethod, description, ingredients, rating, recipeName } = viewrecipe;
    return (
        <div>
            <div>
                <h2>this is view part: {viewrecipe.chefName} </h2>
                <h2>
                    {
                        ingredients.map(ingName => <p>
                            {ingName}
                        </p>)
                    }
                </h2>
            </div>
        </div>
    );
};

export default ViewRecipe;