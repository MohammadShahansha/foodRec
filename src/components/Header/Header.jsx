import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className="flex justify-between bg-base-300 text-center">
                <p className="ml-20 btn btn-ghost normal-case text-xl">TestofFood</p>
                <div className='text-center'>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                </div>
               <div className='mr-20'>
               <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
               </div>
            </div>
        </div>
    );
};

export default Header;