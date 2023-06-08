import React from 'react';
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import lottie from '../../assets/logo/lottie.json'
const ErrorPage = () => {
    return (
        <section >
            <div className=' items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <Lottie className='w-full h-80 md:h-96' animationData={lottie} ></Lottie>
                <div className='ml-96'>
                    <Link
                        to='/'
                        className='px-8 text-center py-3 font-semibold rounded bg-orange-500 text-gray-900'
                    >
                        Please homepage
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
// animationData={food}