import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/logo/logoNew.png'
import Logo2 from '../assets/logo/logo.jpg'
import CustomButton from "../components/ui/CustomButton";
import { Link } from 'react-router-dom';
import IcMenu from '../assets/icons/ic-menu.svg'

const NavBar2 = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    
    
    return (
        <nav className="shadow-lg absolute left-0 top-6 w-full z-50">
            <div className="w-full responsive h-50 flex justify-between items-center py-4">
                <div className='md:w-[200px]'>
                    <img src={IcMenu} alt="" className='md:hidden w-6' />
                </div>
                <ul className="w-full md:flex text-sm hidden justify-start">
                    <ItemNavBar title={'الرئيسية'} path='/'/>
                </ul>
                <div className='w-[200px] flex justify-end'>
                    <img src={ Logo2} alt="" className="w-[100px]" data-aos='fade-out' data-aos-once="true"/>
                </div>
                {/* <CustomButton title={`تسحيل الدخول`} css={'px-6 py-2 text-sm'}/> */}
            </div>
        </nav>
    );
}
 
export default NavBar2;

const ItemNavBar = ({ title, path }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <li data-aos='zoom-in' data-aos-once="true" clasName='z-50'>
            <Link to={path}>
                <div className='mx-4'>
                    <p className='text-white font-semibold cursor-pointer'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        {title}
                    </p>
                    <div className={`pt-2 border-b-2 border-primary-500 -left-[100px] transition-all duration-500 ${isHovered ? 'transform -translate-x-[100] opacity-100' : 'transform-none -translate-x-[100px] opacity-0'}`}></div>
                </div>
            </Link>
        </li>
    )
}