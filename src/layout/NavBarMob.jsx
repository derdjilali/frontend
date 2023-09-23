// import axios from 'axios'
// import fileDownload from 'js-file-download'
import Button from "../components/ui/CustomButton";
import { useEffect, useState } from 'react';
import { Switch } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Logos, Icons
} from '../constants'

const NavBarMob = ({click}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
        document.documentElement.classList.toggle('dark');
    };
    
    return (
        <nav className="fixed bottom-0 w-full z-50 bg-white shadow-2xl border-t dark:border-gray-900 md:hidden">
            <div className="responsive w-full h-50 flex justify-between items-center py-4 bg-white dark:bg-secondary-200">
                <ul className="grid grid-cols-6 gap-x-4 w-full">
                    <li className="flex justify-center">
                        <a href="#home">
                            <img src={Icons.Home} alt="" className="w-[30px]"/>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#about">
                            <img src={Icons.About} alt="" className="w-[30px]"/>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#services">
                            <img src={Icons.Service} alt="" className="w-[30px]"/>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#portfolio">
                            <img src={Icons.Portfolio} alt="" className="w-[30px]"/>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#contact">
                            <img src={Icons.Contact} alt="" className="w-[30px]"/>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <p onClick={()=>click()}>
                            <img src={Icons.LampDark} alt="" className="w-[30px] dark:hidden"/>
                            <img src={Icons.LampLight} alt="" className="w-[30px] hidden dark:block"/>
                        </p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBarMob;