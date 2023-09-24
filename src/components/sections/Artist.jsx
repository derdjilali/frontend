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
                <h1 className='text-2xl md:text-5xl font-extrabold text-white mb-4' data-aos='fade-left' data-aos-once="true">سينمائيو الجزائر</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-right' data-aos-once="true"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8'>
                {
                    artist.slice(0, !more ? 3 : artist.length).map((item, idx) => 
                        <div key={idx} data-aos='zoom-in' data-aos-once="true">
                            <CardArtist key={idx} item={item}/>
                        </div>
                    )
                }
            </div>
            <div data-aos='fade-up' data-aos-once="true">
                <CustomButton title={more ? 'اخفاء' : `عرض المزيد`} css={'px-20 py-3 text-sm mt-10'} handleBtn={handleButton}/>
            </div>
        </div>
    )
}

export default Artist