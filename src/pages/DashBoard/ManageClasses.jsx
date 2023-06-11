import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
    const [manages, setManages] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <>
            <h1 className='text-xl text-center mt-2 text-purple-700'>Manage Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-purple-600 text-black'>

                            <th>Image/Name</th>
                            <th>Class Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            manages.map(manage => <tr>

                                <td key={manage._id}>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={manage.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{manage.instructor}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {manage.name}
                                </td>
                                <td>{manage.email}</td>
                                <td>{manage.seats}</td>
                                <td>{manage.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Status</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageClasses;