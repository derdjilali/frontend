import React, { useEffect, useState } from 'react'
// import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Icons
} from '../../constants'

const CardArtist = ({ item , handle}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className=' h-[450px] rounded-2xl border border-primary-600 px-6 py-4 relative overflow-hidden'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute left-0 top-0 bottom-0 right-0`}
                style={{
                backgroundImage: isHovered && `url(${require('../../assets/img/' + item.image)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.5s ease',
                filter: 'brightness(0.5)'
            }}
            ></div>
            <div className={`transition-all duration-500 ${isHovered ? 'transform translate-y-[280px]' : 'transform-none'}`}>
                <h3 className='font-semibold text-2xl mb-2 mt-20 text-white cursor-pointer' onClick={handle}>{item.name}</h3>
                <div className='border-t-2 rounded-full border-primary-500 w-[150px] mb-6'></div>
            </div>
            <p className={`text-sm text-white font-extralight text-justify transition-all duration-500 ${isHovered ? 'transform opacity-0' : 'transform-none opacity-100'}`}>
                {item.description.substring(0,300)}...
            </p>
        </div>
    )
}

export default CardArtist