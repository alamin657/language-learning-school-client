import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleProviderSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [password, setPassword] = useState(false)
    const handlePassword = () => {
        setPassword(!password)
    }
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Your LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
    }
    const handleGoogle = () => {
        googleProviderSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                const { displayName, email, photoURL } = user;
                const newItem = { displayName, email, photoURL, role: 'student' }
                fetch('https://language-learning-school-server-alamin657.vercel.app/users', {
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
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type={password ? 'text' : 'password'}   {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered"
                            />
                            < FaEyeSlash onClick={handlePassword} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-2 mb-2'><small>Please <Link to='/signup'><small className='text-orange-700 font-bold'>Create an Account?</small></Link> </small></p>
                    <div className="divider">
                    </div>
                    <button onClick={handleGoogle} className="btn btn-circle btn-outline mx-auto mb-4">
                        G
                    </button>
                </div>
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
            </div>

        </div>
    );
};

export default Login;