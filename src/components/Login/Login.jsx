import React, { useContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../Providers/AuthProviders';
import app from '../../firebase/firebase.config';
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Login = () => {
    const {login} = useContext(AuthContext)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const googleSign = result.user;
            console.log(googleSign);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                     </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center mb-3'>
                            <button onClick={handleGoogleSignin} className="btn btn-outline btn-primary text-center"><FaGoogle className='text-black font-semibold text-2xl me-2'></FaGoogle> Signin with Google </button>
                        </div>
                        <div className='text-center mb-3'>
                            <button className="btn btn-outline btn-primary text-center"><FaGithub className='text-black font-semibold text-2xl me-2'></FaGithub> Signin with Github </button>
                        </div>
                       
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Login;