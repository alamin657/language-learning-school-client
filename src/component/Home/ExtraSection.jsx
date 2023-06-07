import React, { useEffect, useState } from 'react';
import { FaYoutube, FaUsers, FaStar } from "react-icons/fa";
const ExtraSection = () => {
    const [extraSections, setExtraSections] = useState([]);
    useEffect(() => {
        fetch('extrasection.json')
            .then(res => res.json())
            .then(data => setExtraSections(data))
    }, [])
    return (
        <div className='mt-4'>
            <div>
                <h1 className='text-center font-bold'>Welcome to our Language <span className='text-orange-600'>Learning School!!!</span></h1>
                <p className='text-center text-xl text-gray-500'>We are dedicated to helping individuals of all ages and backgrounds master <br /> new languages and unlock a world of opportunities.
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-4'>
                {
                    extraSections.map(extraSection =>
                        <div key={extraSection.id}
                            className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={extraSection.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{extraSection.name}</h2>
                                <p>{extraSection.description}</p>
                                <div className='flex justify-between'>
                                    <p className='flex gap-1'><FaYoutube />26Leasson</p>
                                    <p className='flex gap-1'><FaUsers />20 Students</p>
                                </div>
                                <hr />
                                <div className="card-actions justify-end">

                                    <p className='flex gap-2'>{extraSection.rating}<FaStar className='text-orange-600 mt-1' /> <FaStar className='text-orange-600 my-1' /><FaStar className='text-orange-600 my-1' /><FaStar className='text-orange-600 mt-1' /><FaStar className='text-orange-600 mt-1' /></p>

                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ExtraSection;

/**
 *  <div
                        key={extraSection.id}>
                        <img className='h-[50%] w-[50%]' src={extraSection.image} alt="" />
                        <p>{extraSection.price}</p>
                    </div>
 */