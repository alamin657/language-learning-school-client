import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <div className="avatar">
                    <div className="w-24  rounded-full">
                        <img src="https://img.freepik.com/premium-vector/education-icon-university-college-academy_8071-16303.jpg?size=626&ext=jpg&ga=GA1.2.1803344305.1673915057&semt=ais" />
                    </div>

                </div>
                <li><Link to='/dashboard/selected'>My Selected Classes</Link></li>
                <li><Link to='/dashboard/myenrolled'>My Enrolled Classes</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;