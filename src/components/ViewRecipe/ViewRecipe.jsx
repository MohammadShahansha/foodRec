import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipe = () => {
    const viewrecipe = useLoaderData();
    console.log(viewrecipe);
    return (
        <div>
            <h2>this is view part: {viewrecipe.chefName} </h2>
        </div>
    );
};

export default ViewRecipe;