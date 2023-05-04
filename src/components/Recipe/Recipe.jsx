import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    // const notify = () => toast("Wow my Favorite recipe!");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const notify = () => {
        toast("Wow my Favorite recipe!");

        setIsButtonDisabled(true);
    }




    console.log(recipe)
    const { recipeName, cookingMethod, ingredients, rating, } = recipe;
    return (
        <div>
            <div className="w-96 h-full rounded-md bg-neutral text-neutral-content p-5">
                <div className="items-center">
                    <h2 className="font-medium text-3xl text-center mb-3">{recipeName}</h2>
                    <p><span className='underline text-2xl font-medium'>Cooking Method</span>: {cookingMethod.slice(0, 350)}...</p>
                    <h2 className='text-2xl underline'> Ingredients: </h2>
                    <div className='ms-16'>

                        {
                            ingredients.map((ingredient, index )=> <p
                            key={index}
                            >
                                
                                -{ingredient}
                            </p>)
                        }
                    </div>
                    <div className=" flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <p>{rating}</p>
                        </div>

                        <button onClick={notify} disabled={isButtonDisabled} className="btn btn-primary">Favorite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;