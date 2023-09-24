import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../ui/CustomButton'
import CardImg from '../ui/CardImg'
import movies from '../../data/movies.json'

import { Swiper, SwiperSlide } from 'swiper/react';
// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const News = () => {
    const [selected, setSelected] = useState(null)

    return (
        <div id='sec4' className='responsive flex flex-col justify-center items-center bg-News2 py-20 bg-news bg-cover bg-center relative'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-5xl font-extrabold text-white mb-4' data-aos='fade-right' data-aos-once="true">اخر المستجدات</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-left' data-aos-once="true"></div>
            </div>
            <div className='w-[80%] z-40'>
                <Swiper
                    onSwiper={(s)=>setSelected(s)}
                    centeredSlides
                    navigation
                    initialSlide={1}
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    className="swiper-container"
                >
                    {
                        movies.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <CardImg item={item} css={selected && selected.activeIndex === idx ? 'h-[400px]' : 'mt-20 mx-auto brightness-[0.3] w-[200px] h-[280px] mb-8'}>
                                        <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                                    </CardImg>
                                </SwiperSlide>
                            )}
                        )
                    }
                    {/* <SwiperSlide>Movie 1</SwiperSlide>
                    <SwiperSlide>Movie 2</SwiperSlide>
                    <SwiperSlide>Movie 3</SwiperSlide> */}
                    {/* Add more SwiperSlide components as needed */}
                </Swiper>
            </div>
        </div>
    )
}

export default News