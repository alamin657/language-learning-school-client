import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setInstructors(data.slice(0, 6)))
    }, [])
    return (
        <>
            <h1 className='text-center mt-2 text-gray-500'>At our language learning school, we take pride in our team of experienced and dedicated instructors who play a crucial role <br />in helping students achieve their language goals. </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image/Name</th>
                            <th>Instructor</th>
                            <th>price</th>
                            <th>Seats</th>
                            <th>Enrolled</th>
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
                                            <div>
                                                {instructor.instructor}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {instructor.name}
                                    </td>
                                    <td>
                                        ${instructor.price}
                                    </td>
                                    <td>{instructor.seats}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{instructor.enrolled}</button>
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

export default PopularInstructors;