import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }
    return (
        <div className='sticky top-0 z-10'>
            <div className="flex justify-between bg-base-300 text-center py-2">
                <p className="ml-20 btn btn-ghost normal-case text-4xl">TestofFood</p>
                <div className='text-center'>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                </div>
               <div className='mr-20'>
                {
                    user? <div className='flex'><img className='w-16 rounded' src={`${user.photoURL}`} alt="" />
                    <Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl" to='/login'>Log Out</Link>
                    </div>: <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                }
               </div>
            </div>
        </div>
    );
};

export default Header;