import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TopSliderBanner from './TopSliderBanner';
const TopSlider = () => {
    const [slides, setSlides] = useState([])
    useEffect(() => {
        fetch('topslider.json')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span  class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <section >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"

            >
                <div>
                    {
                        slides.map(slide =>
                            <SwiperSlide>
                                <TopSliderBanner key={slide.id}
                                    slide={slide}></TopSliderBanner>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>

        </section>
    );
};

export default TopSlider;