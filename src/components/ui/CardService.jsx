import React, { useEffect } from 'react'
// import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Icons
} from '../../constants'

const CardService = ({service, idx}) => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    var IconImg = null;
    switch (idx) {
        case 0:
            IconImg = Icons.GraphicDesign;
            break;
        case 1:
            IconImg = Icons.UiUx;
            break;
        case 2:
            IconImg = Icons.MotionGraphic;
            break;
        case 3:
            IconImg = Icons.VideoEditing;
            break;
    }
    
    return (
        <div data-aos='zoom-in' data-aos-once="true">
            <div className='group transition ease-in-out duration-700 group bg-primary-200 rounded-lg px-8 py-4 h-[350px] shadow-lg cursor-pointer'>
                <div className='flex justify-between items-center h-16'>
                    <div className='w-fit h-fit'>
                        <img src={IconImg} alt="" className='w-10 group'/>
                    </div>
                </div>
                <div className='group-hover:translate-y-5 transition ease-in-out duration-700 flex flex-col justify-between h-[185px]'>
                    <div>
                        <h2 className='text-lg mb-3 text-secondary-200 font-bold uppercase'>{service.title}</h2>
                        <p className='text-sm group-hover:text-gray-200 text-white'>{ service.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardService