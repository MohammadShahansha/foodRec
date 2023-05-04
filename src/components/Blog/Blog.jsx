import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20 my-10'>
            <div>
                <h2 className='text-3xl font-semibold'>1.Differences between uncontrolled and controlled components.</h2>
                <p>Uncontrolled components rely on the browser to manage state, while controlled components have their state managed by React through event handling. Controlled components offer more control and flexibility, while uncontrolled components are simpler and faster.</p>

            </div>
            <div className='mt-5'>
                <h2 className='text-3xl font-semibold'>2.How to validate React props using PropTypes?</h2>
                <p>React provides a built-in library called PropTypes to validate the props passed to a component. It is recommended to use PropTypes to ensure the correctness of the props being passed to your components.</p>

                <p>If any of the specified props are not passed to the component, or if they are not of the expected type, an error will be thrown in the console, which will help to identify and fix the issue.
                </p>
                <p>
                    You can also use PropTypes to validate more complex data structures like arrays or objects, as well as custom data types. The PropTypes library provides a range of validators for different data types
                </p>
            </div>
            <div className='mt-5'>
                <h2 className='text-3xl font-semibold'>3.Difference between nodejs and express js.</h2>
                <p>
                Node.js provides a runtime environment for executing JavaScript code outside the browser, while Express.js is a web application framework built on top of Node.js that provides additional functionality for building web applications. Express.js provides a routing system, middleware system, and database integration functionality that Node.js does not provide out of the box.
                </p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>4.What is a custom hook, and why will you create a custom hook?</h2>
                <p>Custom hooks in React are a powerful feature that allows developers to encapsulate and share reusable logic across different components, making code more readable, maintainable, and testable.</p>
            </div>
        </div>
    );
};

export default Blog;