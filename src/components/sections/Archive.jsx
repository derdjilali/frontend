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
        <div className='responsive flex flex-col justify-center items-center bg-archive2 py-20'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-3xl font-bold text-white mb-4'>dskasjfk asjdfkjaskdfj f</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3'></div>
            </div>
            <div className='grid grid-cols-3 gap-x-6 gap-y-8'>
                {
                    movies.slice(0, !more ? 3 : movies.length).map((item, idx) => 
                        <CardImg key={idx} css={'h-[400px]'}>
                            <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                        </CardImg>    
                    )
                }
            </div>
            <CustomButton title={more ? 'less' : `voir plus`} css={'px-28 py-2 text-sm mt-10'} handleBtn={handleButton}/>
        </div>
    )
}

export default Archive