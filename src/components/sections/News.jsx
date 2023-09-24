import React, { useEffect, useState } from 'react'
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

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const News = () => {
    const [more, setMore] = useState(false)

    const handleButton = () => {
        setMore(!more)
    }

    return (
        <div className='responsive flex flex-col justify-center items-center bg-News2 py-20 bg-news bg-cover bg-center relative'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-5xl font-extrabold text-white mb-4' data-aos='fade-right' data-aos-once="true">اخر المستحدات</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-left' data-aos-once="true"></div>
            </div>
            <div className='flex justify-center items-end'>
                {/* <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {
                    movies.slice(0, !more ? 3 : News.length).map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <CardImg item={item} css={idx === 1 ? 'h-[400px] mx-4' : 'brightness-[0.3] h-[280px] mb-8'}>
                                    <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                                </CardImg>
                            </SwiperSlide>
                        )}
                    )
                }
                    
                    <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper> */}
                {
                    movies.slice(0, !more ? 3 : News.length).map((item, idx) => {
                        return (
                            <CardImg key={idx} item={item} css={idx === 1 ? 'h-[400px] mx-4' : 'brightness-[0.3] h-[280px] mb-8'}>
                                <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                            </CardImg>
                        )}
                    )
                }
            </div>
        </div>
    )
}

export default News