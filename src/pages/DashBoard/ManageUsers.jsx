import React, { useEffect, useState } from 'react';
import { FaUserShield, FaEdit } from "react-icons/fa";
const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/abc')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-purple-800 text-black'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Users</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name || user.displayName}
                                </td>
                                <td>{user.email}</td>
                                <th className='flex gap-1'>
                                    <FaUserShield /><FaEdit />
                                </th>
                            </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default ManageUsers;