import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image2 from './ImageAndVedio/Image2.jpg'
import Image3 from './ImageAndVedio/Image3.jpg'
import Image1 from './ImageAndVedio/Image1.jpg'
import Image from './ImageAndVedio/Image5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt='' />
                </SwiperSlide>
                <SwiperSlide><
                    img src={Image3} alt='' /></SwiperSlide>
                <SwiperSlide>
                    <img src={Image} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
