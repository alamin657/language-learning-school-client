import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [manages, setManages] = useState([])
    const [denied, setDenied] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])

    const handleApproved = (id) => {
        const approved = {
            status: 'approve'
        }
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Approved Class   Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleDenied = (id) => {
        setDenied(id)
    }

    const handleFeedback = event => {
        event.preventDefault()
        const feedback = event.target.feedback.value

        const Denied = {
            status: 'Deny',
            feedback: feedback
        }

        if (feedback) {
            fetch(`http://localhost:5000/classes/${denied}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Denied)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.upsertedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Denied Class   Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }


    }
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

                                    <div className='flex gap-1'>
                                        <button className="btn btn-primary btn-xs">Pending</button>
                                        <button onClick={() => handleApproved(manage._id)} className="btn btn-success btn-xs">Approve</button>
                                        <label onClick={() => handleDenied(manage._id)} htmlFor="my_modal_6" className="btn btn-warning btn-xs">Deny</label>
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <form onSubmit={handleFeedback}>
                                                    <textarea name='feedback' className="textarea textarea-secondary"></textarea><br />
                                                    <input className='btn btn-primary' type="submit" value="submit" />
                                                </form>
                                                <div className="modal-action">

                                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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