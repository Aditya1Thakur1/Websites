import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import airIndia from '../assets/img/fly-air-india.jpg';
import alaska from '../assets/img/fly-alaska.jpg';
import british from '../assets/img/fly-british-airways.jpg';
import etihad from '../assets/img/fly-etihad-airways.jpg';
import indigo from '../assets/img/fly-indigo.jpg';

function BigCompanies() {

    const companiesData = [
        airIndia,
        alaska,
        british,
        etihad,
        indigo,
        airIndia,
        alaska,
        british,
        etihad,
        indigo,
        airIndia,
        alaska,
        british,
        etihad,
        indigo,
    ];

    return (
      
        <Swiper
            modules={[Navigation, Autoplay]}
            className="mySlider"
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            freeMode={false}
            speed={8000}
            allowTouchMove={false}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loopAdditionalSlides={20}
        >
            {
                companiesData.map((company, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={company}
                            alt=""
                            className="img-fluid"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default BigCompanies;