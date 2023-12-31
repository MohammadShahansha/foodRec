import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateROute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateROute;