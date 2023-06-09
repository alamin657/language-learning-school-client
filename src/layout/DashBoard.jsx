import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const DashBoard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh)]'>

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <div className="avatar">
                                <div className="w-24  rounded-full">
                                    <img src="https://img.freepik.com/premium-vector/education-icon-university-college-academy_8071-16303.jpg?size=626&ext=jpg&ga=GA1.2.1803344305.1673915057&semt=ais" />
                                </div>

                            </div>
                            <li><Link to='/dashboard/studentdashboard'>Student DashBoard</Link></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>



        </>
    );

};

export default DashBoard;