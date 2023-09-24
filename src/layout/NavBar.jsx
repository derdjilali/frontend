import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/logo/logoNew.png'
import Logo2 from '../assets/logo/logo.jpg'
import CustomButton from "../components/ui/CustomButton";

const NavBar = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])
    
    return (
        <nav className="shadow-lg absolute left-0 top-6 w-full z-50">
            <div className="w-full responsive h-50 flex justify-between items-center py-4">
                <div className='w-[200px]'></div>
                <ul className="w-full md:flex text-sm hidden justify-center">
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#sec1">
                            نبذه عن المنصه
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#sec2">
                            ارشيف سينما الجزائر
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#sec3">
                            سينمائيو الجزائر
                        </a>
                    </li>
                    <li data-aos='zoom-in' data-aos-once="true" className="px-4 py-2 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in text-white">
                        <a href="#sec4">
                            اخر المستجدات
                        </a>
                    </li>
                </ul>
                <div className='w-[200px]'>
                    <img src={ Logo2} alt="" className="w-[100px]" data-aos='fade-out' data-aos-once="true"/>
                </div>
                {/* <CustomButton title={`تسحيل الدخول`} css={'px-6 py-2 text-sm'}/> */}
            </div>
        </nav>
    );
}
 
export default NavBar;