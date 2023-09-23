import React, { useEffect, useState } from 'react'
import aboutData from '../../data/about.json'
import aboutDarkData from '../../data/about_dark.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const About = () => {
    const [select, setSelect] = useState(0)

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    const items = ['about me', 'skills', 'experience', 'education']

    return (
        <div className='responsive flex  flex-col md:flex-row justify-center'>
            <div className='rounded-3xl bg-primary-200 h-[200px] overflow-hidden md:w-1/3 flex items-center relative' data-aos='zoom-in' data-aos-once="true">
                <p className='text-[370px] font-[900] text-white dark:text-secondary-200 absolute -left-20 top-1/2 -translate-y-1/2'>6</p>
                <p className='text-xl text-left w-[100px] text-white dark:text-secondary-200 absolute bottom-6 right-4'>years of</p>
                <p className='font-bold absolute w-[100px] text-white dark:text-secondary-200 bottom-2 right-4'>experience</p>
            </div>
            <div className='md:w-2/3 md:pl-14 mt-6 md:mt-0'>
                <div className='flex mb-8' data-aos='fade-left' data-aos-once="true">
                    {
                        items.map((item, idx) => 
                            <div key={idx} className='relative mr-2 md:mr-6 cursor-pointer '>
                                <p className={`h-full text-center flex items-center text-xs md:text-base capitalize px-4 py-2 rounded-lg z-30 relative text-white ${select === idx ? 'bg-primary-200' : 'bg-secondary-200 dark:bg-[#505050]'}`}
                                    key={idx}
                                    onClick={() => setSelect(idx)}
                                >{item}</p>
                                <div className={`absolute -bottom-1 -ml-2 rotate-45 left-1/2 -translate-x-1/2 w-[15px] h-[15px] z-10  ${select === idx ? 'bg-primary-200' : 'bg-secondary-200 dark:bg-[#505050]'}`}></div>
                                <div className={`absolute -bottom-2 -ml-4 left-1/2 -translate-x-1/2 w-[15px] h-[15px] z-20  ${select === idx ? 'bg-white dark:bg-secondary-200' : 'bg-white dark:bg-secondary-200'}`}></div>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col md:flex-row h-fit' data-aos='fade-up' data-aos-once="true">
                    <div className='text-sm md:text-base md:text-left text-secondary-200 dark:text-white hidden dark:block'>
                    </div>
                    <div className='text-sm md:text-base md:text-left text-secondary-200 dark:text-white dark:hidden'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About