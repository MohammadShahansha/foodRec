import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-52'>
            <div>
                <h2 className='text-red-500  text-center text-6xl font-bold'>Error</h2>
            <img className='h-96 w-96 rounded-md' src="/images/error.jpg" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;