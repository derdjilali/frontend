import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Icons
} from '../../constants'

const CardImg = ({ img, left, title}) => {
    
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className={`bg-[#505050] rounded-xl shadow-lg w-2/3 md:w-full h-[250px] relative cursor-pointer`} data-aos='zoom-in' data-aos-once="true">
            {img && <img src={require(`../../assets/img/${img}`)} alt="" className='w-full h-full object-cover rounded-xl'/>}
            <div className={`absolute top-1/2 -translate-y-1/2 ${left ? '-left-20' : '-right-20'}`}>
                <img src={left ? Icons.ArrowRedSecond : Icons.ArrowRed} alt="" />
                <p className={`font-signboard absolute ${title.split(' ').length > 1 ? '-top-8' : '-top-4'} -translate-y-1/2 text-center text-sm ${left ? '-left-10' : '-right-10'} w-[85px] dark:text-white`}>{title}</p>
            </div>
        </div>
    )
}

export default CardImg