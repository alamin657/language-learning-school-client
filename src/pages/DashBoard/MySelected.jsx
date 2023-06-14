import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const MySelected = () => {
    const { user } = useContext(AuthContext)
    const [items, setitems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/students/${user?.email}`)
            .then(res => res.json())
            .then(data => setitems(data))
    }, [user])


    const handleDelete = _id => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // })
        fetch(`http://localhost:5000/students/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = items.filter(item => item._id !== _id)
                    setitems(remaining)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Email</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Seats</th>
                        <th>Enroll</th>
                        <th>Details</th>

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

                                    </div>
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>{item.instructor}</td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.enrolled}</td>
                                <td className='flex gap-2'><Link to={`/dashboard/payment/${item?._id}`}><button className="btn btn-circle btn-outline bg-orange-600">
                                    pay
                                </button></Link>
                                    <button onClick={() => handleDelete(item?._id)} className="btn btn-circle btn-outline bg-green-600">
                                        D
                                    </button>

                                </td>
                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MySelected;