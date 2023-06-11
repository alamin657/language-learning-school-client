import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateProfileUser, googleProviderSignIn } = useContext(AuthContext)
    const onSubmit = data => {

        const { name, email, photoURL } = data;
        const newItem = { name, email, photoURL }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        if (data.password === data.confirmpassword) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser)
                    updateProfileUser(data.name, data.photoURL)
                        .then(result => {
                            const user = result?.user;
                            console.log(user)
                        })
                })

        }

    }

    const handleGoogle = () => {
        googleProviderSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                const { displayName, email, photoURL } = user;
                const newItem = { displayName, email, photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newItem)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                    })
                Swal.fire({
                    icon: 'success',
                    title: 'Your Google LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })

            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have One Capital Letter ,  One special character.</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password"  {...register("confirmpassword", { required: true })} name='confirmpassword' placeholder="confirm password" className="input input-bordered" />
                            {errors.confirmpassword && <span className="text-red-600">Confirm Password is required</span>}
                        </div>
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </form>
                    <p className='ml-2 mb-2'><small>Already <Link to='/login'><small className='text-orange-700 font-bold'>Have an Account?</small></Link> </small></p>
                    <div className="divider">
                    </div>
                    <button onClick={handleGoogle} className="btn btn-circle btn-outline mx-auto mb-4">
                        G
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;