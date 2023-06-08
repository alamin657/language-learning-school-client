import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
            <div>
                <h1 className='text-xl mt-2 text-center'>Welcome to <span className='text-orange-600'>Your Classes!!!</span></h1>
                <p className='text-center text-gray-500'>
                    Language learning school classes typically aim to teach students a new language or improve their existing language skills. <br />  These classes are designed to provide structured  instruction and guidance to help learners develop proficiency <br /> in reading, writing, speaking. and listening in the target language. </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3'>
                {
                    classes.map(classe => <div
                        key={classe._id}
                        className="card card-compact  w-96 bg-base-100 shadow-xl">
                        <figure><img src={classe.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className='text-xl'>${classe.price}/<span>Lifetime</span></h1>
                            <p className='font-bold'>{classe.instructor}</p>
                            <h2 className='text-xl'>{classe.name}</h2>
                            <div className="card-actions justify-end">
                                <p>Seats:{classe.seats}</p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>


        </>
    );
};

export default Classes;