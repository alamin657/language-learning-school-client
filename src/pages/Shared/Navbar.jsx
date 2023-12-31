import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/25496642.jpg'
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut, toggleTheme } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'You are LogOut',
                    showConfirmButton: false,
                    timer: 2000
                })
            })

            .catch(error => console.log(error));
    }


    const learningOptions = <>
        <li><Link>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><p onClick={toggleTheme}>theme</p></li>
        {
            user && <li><Link to='/dashboard'>DashBoard</Link></li>
        }

    </>
    return (
        <div className="navbar  bg-opacity-20 bg-black  max-w-screen-xl  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {learningOptions}
                    </ul>
                </div>
                <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                <a className="btn btn-ghost ">Language Learning</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {learningOptions}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                {
                    user && <img title={user?.displayName} className="rounded-full w-8" src={user?.photoURL}></img>
                }
                {
                    user ? <>
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                        <a><Link to="/login">Login</Link></a>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;