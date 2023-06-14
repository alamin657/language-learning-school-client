import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
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
                        <th>Enroll</th>
                        <th>Status</th>
                        <th>Action</th>

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
                            <td>{item.enrolled}</td>
                            <td>{item.status}</td>

                            <th>
                                {/* The button to open modal */}
                                <label htmlFor="my_modal_6" className="btn btn-sm btn-success">Feedback</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            {item.feedback}
                                        </h3>

                                        <div className="modal-action">
                                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;