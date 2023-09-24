import React, { useEffect, useState } from 'react'
import movies from '../../data/movies.json'
import CardImg from '../ui/CardImg'
import CustomButton from '../ui/CustomButton'

const Archive = () => {
    const [more, setMore] = useState(false)

    const handleButton = () => {
        setMore(!more)
    }
    
    return (
        <div className='responsive flex flex-col justify-center items-center bg-archive bg-center bg-cover py-20'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-5xl font-extrabold text-white mb-4' data-aos='fade-right' data-aos-once="true">ارشيف سينما الجزائر</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-left' data-aos-once="true"></div>
            </div>
            <div className='grid grid-cols-3 gap-x-10 gap-y-8'>
                {
                    movies.slice(0, !more ? 3 : movies.length).map((item, idx) => 
                        <CardMovie key={idx} item={item}/>
                    )
                }
            </div>
            <div data-aos='fade-up' data-aos-once="true">
                <CustomButton title={more ? 'اخفاء' : `عرض المزيد`} css={'px-20 py-3 text-sm mt-10'} handleBtn={handleButton}/>
            </div>
        </div>
    )
}

export default Archive

const CardMovie = ({ item }) => {
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
                <h3 className={`text-3xl font-bold text-white mb-2 overflow-hidden transition-all duration-500 ${
                    isHovered ? 'transform translate-y-[-100px] opacity-0' : 'transform-none opacity-100'
                }`}
                >{item.title}</h3>
                <div className={`border-t-2 rounded-full border-primary-500 w-[100px]
                    transition-all duration-500 ${isHovered ? 'transform translate-x-[-300px] opacity-0' : 'transform-none opacity-100'}`}></div>
            </div>
            <div className={`absolute left-0 top-0 bottom-10 right-0 flex items-end justify-center
                transition-all duration-500 ${isHovered ? 'transform-none opacity-100' : 'opacity-0'}`}>
                    <CustomButton title={'عرض المزيد'} css={'px-8 py-5'}/>
            </div>
            <CardImg css={'h-[450px]'}>
                <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
            </CardImg>    
        </div>
    )
}