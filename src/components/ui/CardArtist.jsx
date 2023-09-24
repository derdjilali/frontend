import React, { useEffect } from 'react'
// import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Icons
} from '../../constants'

const CardArtist = ({item}) => {
    return (
        <div className='h-[450px] rounded-2xl border border-primary-600 px-6 py-4'>
            <h3 className='font-semibold text-lg mb-2 mt-10 text-white'>mohamed</h3>
            <div className='border-t-2 rounded-full border-primary-500 w-[150px] mb-6'></div>
            <p className='text-sm text-white font-extralight'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tempora, quod ea hic iusto pariatur commodi distinctio veritatis doloribus, eum deleniti possimus autem nostrum dicta in molestias, fugit placeat. Ut dolorum tenetur consequuntur fugit doloribus quaerat ab eum, inventore quam!
            </p>
        </div>
    )
}

export default CardArtist