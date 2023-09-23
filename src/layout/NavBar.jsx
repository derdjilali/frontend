// import axios from 'axios'
// import fileDownload from 'js-file-download'
import Button from "../components/ui/CustomButton";
import { useEffect, useState } from 'react';
import { Switch } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Logos
} from '../constants'

const NavBar = ({click}) => {
    const [notification, showNotification] = useState(false)
    const [hideNot, setHideNot] = useState(false)

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
        document.documentElement.classList.toggle('dark');
    };
    
    return (
        <nav className="shadow-lg fixed w-full z-50 bg-white dark:bg-secondary-200">
            <div className="responsive w-full h-50 flex justify-between items-center py-4 bg-white dark:bg-secondary-200">
                
                <img src={ Logos.LogoDark} alt="" className="dark:hidden w-20" data-aos='fade-out' data-aos-once="true"/>
                <img src={ Logos.Logo} alt="" className="hidden dark:block w-20" data-aos='fade-out' data-aos-once="true"/>
                <ul className="flex text-sm">
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in dark:text-white">
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in dark:text-white">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in dark:text-white">
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in dark:text-white">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 mr-10 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in dark:text-white">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="">
                        <Button name_btn='Downaload CV' padding='px-3 py-2'/>
                    </li>
                    <li className="items-center ml-4 hidden md:flex">
                        <p onClick={() => toggleDarkMode()} className="mr-2 dark:text-white">Dark mode:</p>
                        <Switch id='email-alerts' colorScheme='red' onChange={()=>click() } />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;