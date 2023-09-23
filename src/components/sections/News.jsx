import React, { useEffect, useState } from 'react'
import CustomButton from '../ui/CustomButton'
import CardImg from '../ui/CardImg'
import movies from '../../data/movies.json'

const News = () => {
    const [more, setMore] = useState(false)

    const handleButton = () => {
        setMore(!more)
    }

    return (
        <div className='responsive flex flex-col justify-center items-center bg-News2 py-20 bg-news bg-cover bg-center relative'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-3xl font-bold text-white mb-4'>dskasjfk asjdfkjaskdfj f</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3'></div>
            </div>
            <div className='flex justify-center items-end'>
                {
                    movies.slice(0, !more ? 3 : News.length).map((item, idx) => {
                        return(<CardImg key={idx} item={item} css={idx === 1 ? 'h-[400px] mx-4' : 'brightness-[0.3] h-[280px] mb-8'}>
                                <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                            </CardImg>)
                        }
                    )
                }
            </div>
        </div>
    )
}

export default News