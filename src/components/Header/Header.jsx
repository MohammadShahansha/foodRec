import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then( result => {
            console.log(result)
        })
        .catch(error => console.log(error));
    }
    return (
        <nav className='sticky top-0 z-10'>
            <div className="lg:flex justify-between bg-base-300  py-2">
                <p className="ml-20 btn btn-ghost normal-case text-4xl">TestofFood</p>
                <div className=''>
                    <NavLink activeclassname="active" className="btn btn-ghost sm:text-center normal-case text-xl" to='/'>Home</NavLink>
                    <NavLink activeclassname="active" className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</NavLink>
                </div>
               <div className='lg:mr-20'>
                {
                    user? <div className='flex'><img className='w-16 rounded' src={`${user.photoURL}`} alt="" />
                    <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                    </div> : <NavLink activeclassname="active" className="btn btn-ghost normal-case text-xl" to='/login'>Login</NavLink>
                }
               </div>
            </div>
        </nav>
    );
};

export default Header;