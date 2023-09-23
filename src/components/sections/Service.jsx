import React, { useEffect, useState } from 'react'
import CardService from '../ui/CardService'
import serviceData from '../../data/services.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Service = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className='responsive flex flex-col justify-center items-center'>
            <h4 className='text-4xl font-semibold  dark:text-white' data-aos='fade-left' data-aos-once="true">Services</h4>
            <h1 className='text-sm mt-4 mb-10 text-center dark:text-white' data-aos='fade-right' data-aos-once="true">Discover the Services I provide for my clients</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    serviceData
                        .map((item, idx) => {
                            return(
                                <div key={idx}>
                                    <CardService service={item} idx={idx} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Service