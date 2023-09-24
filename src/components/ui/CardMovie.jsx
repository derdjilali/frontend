import React, { useState } from 'react'
import CustomButton from './CustomButton';
import CardImg from './CardImg';


const CardMovie = ({ item, handle}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            data-aos='zoom-in'
            data-aos-once="true"
            className={`relative rounded-xl overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute left-0 top-1/2 bottom-0 right-0 bg-gradient-to-t from-black to-transparent shadow-lg
                transition-all duration-500 ${isHovered ? 'transform translate-y-[60px] opacity-0' : 'transform-none opacity-100'}`}></div>
            <div className='absolute right-0 bottom-0 z-30 px-6 py-10'>
                <h3 className={`text-2xl font-bold text-white mb-2 overflow-hidden transition-all duration-500 ${
                    isHovered ? 'transform translate-y-[-100px] opacity-0' : 'transform-none opacity-100'
                }`}
                >{item.title}</h3>
                <div className={`border-t-2 rounded-full border-primary-500 w-[100px]
                    transition-all duration-500 ${isHovered ? 'transform translate-x-[-300px] opacity-0' : 'transform-none opacity-100'}`}></div>
            </div>
            <div className={`z-40 absolute left-0 top-0 bottom-10 right-0 flex items-end justify-center
                transition-all duration-500 ${isHovered ? 'transform-none opacity-100' : 'opacity-0'}`}>
                <CustomButton title={'عرض المزيد'} css={'px-8 py-5'} handleBtn={ handle} />
            </div>
            <CardImg css={'h-[450px]'}>
                <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
            </CardImg>    
        </div>
    )
}

export default CardMovie