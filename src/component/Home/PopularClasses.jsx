import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])

    return (
        <>
            <p className='text-gray-500 mt-4 text-center'>At our language learning school, we offer a wide range of popular classes designed to <br />help students effectively learn and improve their language skills.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    classes.map(classe => <div key={classe._id} className="card card-compact w-96 bg-base-100 shadow-xl mt-2">
                        <figure><img src={classe.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classe.name}</h2>
                            <p>{classe.instructor}</p>
                            <div className='flex justify-between'>
                                <p>Price:${classe.price}</p>
                                <p>Seats:{classe.seats}</p>
                            </div>
                            <hr />
                            <div className="card-actions justify-end">
                                <p>Enrolled:{classe.enrolled}</p>
                                <button className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
};

export default PopularClasses;