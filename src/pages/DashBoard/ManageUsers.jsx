import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
// import { FaUserShield, FaEdit } from "react-icons/fa";
const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const { role } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/users/abc')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])




    const handleAdmin = email => {
        const admin = {
            role: 'admin'
        }
        fetch(`http://localhost:5000/users/xyz/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleInstructor = email => {
        const instructor = {
            role: 'instructor'
        }
        fetch(`http://localhost:5000/users/xyz/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(instructor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
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
                                    {/* <FaUserShield /><FaEdit /> */}
                                    <button disabled={role === 'admin'} onClick={() => handleAdmin(user.email)} className=' btn btn-success'>Admin</button>
                                    <button disabled={role === 'instructor'} onClick={() => handleInstructor(user.email)} className=' btn btn-warning'>Instructor</button>

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