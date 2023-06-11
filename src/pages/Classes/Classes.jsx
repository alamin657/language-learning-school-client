import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Classes = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleSelected = (selected) => {
        const { _id, image, instructor, seats, price } = selected
        const data = {
            image,
            instructor,
            seats,
            price,
            email: user?.email
        }
        console.log(data)
        fetch(`http://localhost:5000/students/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.upsertedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'My Selected Class   Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div>
                <h1 className='text-xl mt-2 text-center'>Welcome to <span className='text-orange-600'>Your Classes!!!</span></h1>
                <p className='text-center text-gray-500'>
                    Language learning school classes typically aim to teach students a new language or improve their existing language skills. <br />  These classes are designed to provide structured  instruction and guidance to help learners develop proficiency <br /> in reading, writing, speaking. and listening in the target language. </p>
            </div>
            <div className='grid sm:grid-cols-1 mt-4 md:grid-cols-3 gap-2'>
                {
                    classes.map(classe => <div
                        key={classe._id}
                        className="card card-compact gap-2 mt-2  w-full bg-base-100 shadow-xl">
                        <figure><img className='p-5' src={classe.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className='text-xl'>${classe.price}/<span>Lifetime</span></h1>
                            <p className='font-bold'>{classe.instructor}</p>
                            <h2 className='text-xl'>{classe.name}</h2>
                            <hr />
                            <div className="card-actions justify-end">
                                <p className='text-xl'>Seats:{classe.seats}</p>
                                <button onClick={() => handleSelected(classe)} className="btn btn-primary">Selected</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>


        </>
    );
};

export default Classes;