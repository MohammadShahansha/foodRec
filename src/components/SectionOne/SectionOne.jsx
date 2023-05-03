import React from 'react';

const SectionOne = () => {
    return (
        <div className='mx-20'>
            <h2 className='text-5xl text-center font-semibold mb-2'>Bibimbap</h2>
            <div>
                <div className="grid grid-cols-2 items-center">
                    <figure><img className='rounded-md' src="/images/recipe.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl">Bibimbap is a popular food for korian</h2>
                        <h2 className='text-2xl underline'>Ingredients:</h2>
                        <p>
                            1 cup of rice, cooked
                            4 ounces of beef, sliced into thin strips
                            1 tablespoon of soy sauce
                            1 tablespoon of sesame oil
                            2 garlic cloves, minced
                            1 cup of spinach, blanched
                            1 cup of bean sprouts, blanched
                            1 cup of shredded carrots, blanched
                            1 cup of sliced shiitake mushrooms, sautéed
                            2 eggs, fried or poached
                            Gochujang sauce (Korean red pepper paste), to taste
                            Sesame seeds, for garnish
                            Vegetable oil, for cooking
                        </p>
                        <h2 className='text-2xl underline'>the method for cooking Bibimbap:</h2>
                        <p>
                            Cook the rice.
                            Cook the marinated beef.
                            Blanch the spinach, bean sprouts, and shredded carrots.
                            Sauté the shiitake mushrooms.
                            Cook the eggs.
                            Assemble the Bibimbap by placing rice in a bowl and adding the cooked beef, blanched vegetables, sautéed mushrooms, and cooked eggs on top.
                            Drizzle Gochujang sauce over the top.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;