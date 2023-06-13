import React from 'react';
const TopSliderBanner = ({ slide }) => {
    const { image, message, information, text } = slide;
    return (
        <>

            <div className='bg-cover min-h-screen' style={{
                backgroundImage: `url(${image})`,
            }}>
                <div className='text-center text-xl'>
                    <h1>{text}</h1>
                    <p>{message}</p>
                    <p>{information}</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>

        </>
    )
};

export default TopSliderBanner;