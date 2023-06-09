import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="overflow-x-auto mt-2">
            <table className="table">
                {/* head */}
                <thead className='bg-teal-400'>
                    <tr className='text-black'>
                        <th>Instructor Image</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map(instructor =>
                            <tr key={instructor._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {instructor.name}
                                </td>
                                <td>{instructor.email}</td>
                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Instructors;