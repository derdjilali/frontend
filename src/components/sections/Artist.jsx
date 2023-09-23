import React, { useEffect, useState } from 'react'
import artist from '../../data/artist.json'
import CardImg from '../ui/CardImg'
import CustomButton from '../ui/CustomButton'
import CardArtist from '../ui/CardArtist'

const Artist = () => {
    const [more, setMore] = useState(false)

    const handleButton = () => {
        setMore(!more)
    }

    return (
        <div className='responsive flex flex-col justify-center items-center bg-Artist2 py-20 bg-artist bg-cover bg-center relative'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-3xl font-bold text-white mb-4'>dskasjfk asjdfkjaskdfj f</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3'></div>
            </div>
            <div className='grid grid-cols-3 gap-x-6 gap-y-8'>
                {
                    artist.slice(0, !more ? 3 : artist.length).map((idx, item) => 
                        <CardArtist key={idx} item={item}/>
                    )
                }
            </div>
            <CustomButton title={more ? 'less' : `voir plus`} css={'px-28 py-2 text-sm mt-10'} handleBtn={handleButton}/>
        </div>
    )
}

export default Artist