import React, { useState } from 'react'

import build from '../../data/build.json'
import CardImg from '../ui/CardImg'

const Build = () => {
    const [selectBuild, setSelectBuild] = useState(null)

    return (
        <div className='responsive flex flex-col justify-center items-center'>
            <h4 className='text-4xl font-semibold dark:text-white' data-aos='fade-left' data-aos-once="true">My latest work</h4>
            <h1 className='text-sm mt-4 mb-10 text-center dark:text-white' data-aos='fade-right' data-aos-once="true"> Get ready to be inspired as you explore a curated collection of my finest creations, spanning from breathtaking designs to innovative digital experiences.</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                {build.map((item, idx) => 
                    <div key={idx} className={`flex md:block ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`} onClick={()=>setSelectBuild(idx)}>
                        <CardImg img={item.img} left={idx % 2 === 0} title={item.title} />
                    </div>
                )}
            </div>

            {console.log(build[selectBuild].details)}
            {
                selectBuild!== null && 
                <div className='fixed w-full h-full left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
                    <div className='w-[80%] h-[90%]'>
                            <iframe src={require(`../../assets/img/${build[selectBuild].details}`)} width="100%" height="100%"></iframe>
                    </div>
                </div>
            }
        </div>
    )
}

export default Build