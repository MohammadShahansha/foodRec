import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser,updatedInfo} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        setError('');
        if(password.length<6){
            setError('password must be 6 cherecter long');
            return
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updatedInfo(name, photo);
            setSuccess('Register Succesful!')
            form.reset();
        })
        .catch(error => {
            console.log(error);
        });

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                     </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required  />
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
                                <button className="btn btn-primary">Register</button>
                                <p className='text-center'><small>Already have an Account?</small><Link to='/login' className='text-primary underline'>Login</Link></p>
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <p className='text-green-600'>{success}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;