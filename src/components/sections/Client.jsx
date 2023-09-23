import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Logos
} from '../../constants'

const Client = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className='responsive flex flex-col justify-center items-center mt-10 md:mt-0' id='service'>
            <h4 className='text-xl md:text-3xl font-semibold dark:text-white text-center' data-aos='fade-left' data-aos-once="true">Trusted by Clients & Businesses across the world!</h4>
            <h1 className='text-sm mt-4 mb-10 text-center dark:text-white' data-aos='fade-right' data-aos-once="true">Where trust knows no boundaries. Clients and businesses worldwide have chosen us.</h1>
            <div id='about'></div>
            <div className='grid grid-cols-4 gap-x-4 md:flex items-center justify-center'>
                <img src={Logos.Trebasae} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Ackos} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Alpha} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Camico} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                {/* <img src={Logos.Cehzo} alt="" />
                <img src={Logos.Kevo} alt="" /> */}
            </div>
            <div className='grid grid-cols-5 gap-x-4 md:flex items-center justify-center mt-4 px-4 md:px-0'>
                <img src={Logos.Mor} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Alsia} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Kantek} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Chezo} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
                <img src={Logos.Kevo} alt="" className='mr-8 w-full' data-aos='zoom-in' data-aos-once="true"/>
            </div>
        </div>
    )
}

export default Client