import React from 'react';
const TopSliderBanner = ({ slide }) => {
    const { image, message, information, text } = slide;
    return (
        <>
            <div className='bg-cover min-h-screen' style={{
                backgroundImage: `url(${image})`,
            }}>
                <div className='text-center'>
                    <h1>{text}</h1>
                    <p>{message}</p>
                    <p>{information}</p>
                </div>
            </div>
        </>
    )
};

export default TopSliderBanner;