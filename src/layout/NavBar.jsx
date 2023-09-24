import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/logo/logo.svg'
import CustomButton from "../components/ui/CustomButton";

const NavBar = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])
    
    return (
        <nav className="shadow-lg absolute left-0 top-6 w-full z-50">
            <div className="w-full responsive h-50 flex justify-between items-center py-4">
                
                <img src={ Logo} alt="" className="w-[100px]" data-aos='fade-out' data-aos-once="true"/>
                <ul className="flex text-sm">
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                </ul>
                <CustomButton title={`تسحيل الدخول`} css={'px-6 py-2 text-sm'}/>
            </div>
        </nav>
    );
}
 
export default NavBar;