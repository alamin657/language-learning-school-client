import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table">

                <thead>
                    <tr className='text-black bg-purple-800'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr
                            key={item._id}>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.instructor}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.seats}</td>
                            <td>{item.price}</td>
                            <th>
                                <button className="btn  btn-xs btn-warning">{item.status}</button>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;