import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import Sidebar from '../pages/DashBoard/Sidebar';

const DashBoard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh)]'>

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>
                    </div>
                    <Sidebar></Sidebar>
                </div>
                <Footer></Footer>
            </div>



        </>
    );

};

export default DashBoard;