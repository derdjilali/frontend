import { useEffect, useState } from "react";
import Button from "../ui/Button";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import {
    Images, Icons
} from '../../constants'
// import Typed from 'react-typed';

const Header = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

return (
        <div className="mt-10 flex flex-col md:flex-row items-center md:justify-between w-full responsive h-[900px] md:h-screen overflow-hidden" id="home">
            <div className="md:w-[50%] flex flex-col justify-center mt-20 md:-mt-10">
                <div className="relative w-fit h-fit">
                    <h1 className="font-signboard text-secondary-100 font-extrabold text-xl md:text-4xl px-4 w-fit  py-1 capitalize mt-8 mb-4 text-white dark:text-secondary-200 bg-primary-200 rounded-lg">
                        {/* <Typed
                            strings={['BENRABH Mohamed.']}
                            typeSpeed={40}
                            backSpeed={50}
                            // attr="placeholder"
                            loop /> */}
                        i’m Salim Baghzouz
                    </h1>
                    <div className="absolute top-1 left-12">
                        <p className="bg-secondary-200 dark:bg-[#505050] text-white px-2 py-2 rounded-lg  text-xs z-30 relative">Hi There!</p>
                        <div className='absolute -bottom-1 -ml-2 rotate-45 bg-secondary-200 dark:bg-[#505050] left-1/2 -translate-x-1/2 w-[15px] h-[15px] z-10'></div>
                        <div className='absolute -bottom-2 -ml-4 bg-primary-200 left-1/2 -translate-x-1/2 w-[15px] h-[15px] z-20'></div>
                    </div>
                </div>
                <h1 className="text-2xl md:text-2xl font-bold mb-4 dark:text-white dark:hidden">
                    
                </h1>
                <h1 className="typewriter text-2xl md:text-2xl font-bold mb-4 text-white hidden dark:block">
                    
                </h1>
                <p data-aos='fade-up' data-aos-once="true" className="dark:text-white">
                    I'm your all-in-one creative partner.  As a graphic designer, UI/UX specialist, motion graphics guru, and video editing maestro, I'm here to craft visual wonders that leave a lasting impression. Let's embark on a journey of creativity together!
                </p>
                <div className="mt-8" data-aos='fade-up' data-aos-once="true">
                    <a href="#contact" className="rounded-lg px-4 py-2 capitalize w-fit bg-primary-200 mr-4 text-white">
                        Say Hello!
                    </a>
                    <a href="#portfolio" className="rounded-lg px-4 py-2 capitalize w-fit bg-secondary-200 dark:bg-[#505050] text-white">
                        Portfolio →
                    </a>
                </div>
            </div>
            <div className="md:w-[40%] relative mt-10 md:mt-0">
                <div className="w-fit h-fit relative hover:scale-105 hover:rotate-1 transition duration-500 cursor-pointer">
                    <img src={Images.Image} alt="" className="relative z-30" />
                    <img src={Images.Line3} alt="" className="z-40 absolute w-[200px] 2xl:w-[270px] right-[10px] 2xl:right-[0px] -bottom-[40px] 2xl:-bottom-[55px]"/>
                    <img src={Images.Circle} alt="" className="absolute -right-[40px] top-4 z-0 w-[250px] md:w-[270px] lg:w-[340px] xl:w-[300px] 2xl:w-[390px]"/>
                </div>
                <div className='absolute left-[100px] top-[20px] hidden sm:block'>
                    <img src={Icons.Arr1} alt="" />
                    <p className="font-signboard uppercase w-[100px] text-[#A8A8A8] text-xs md:text-sm -ml-[40px] -mt-[10px] text-center">Graphic designer</p>
                </div>
                <div className='absolute left-[60px] -bottom-[20px] hidden sm:block'>
                    <img src={Icons.Arr2} alt="" />
                    <p className="font-signboard uppercase w-[100px] text-[#A8A8A8] text-xs md:text-sm -ml-[100px] -mt-[25px]  text-center">UI / UX DESIGNER</p>
                </div>
                <div className='absolute -right-[90px] top-[130px] hidden sm:block'>
                    <img src={Icons.Arr4} alt="" />
                    <p className="font-signboard uppercase w-[70px] text-[#A8A8A8] text-xs md:text-sm -mt-[97px] ml-[35px] text-center">Video editor</p>
                </div>
                <div className='absolute -right-[50px] bottom-[0px] hidden sm:block'>
                    <img src={Icons.Arr3} alt="" />
                    <p className="font-signboard uppercase w-[100px] text-[#A8A8A8] text-xs md:text-sm absolute  text-center ml-[30px] -mt-[10px]">Motion graphics designer</p>
                </div>
            </div>
        </div>
    );
}

export default Header;