import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyEnrolled = () => {
    const [items, setItems] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>

                        <th>Image/Instructor</th>
                        {/* <th>Class Name</th> */}
                        <th>Email</th>
                        <th>Price</th>
                        {/* <th>Seats</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items.map(item =>
                            <tr key={item._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            {item.instructor}
                                        </div> */}
                                    </div>
                                </td>
                                {/* <td>
                                    {item.name}
                                </td> */}
                                <td>{item.email}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default MyEnrolled;