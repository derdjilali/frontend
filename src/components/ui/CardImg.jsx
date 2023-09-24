import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
    Icons
} from '../../constants'

const CardImg = ({ children, css, handle }) => {
    return (
        <div className={`rounded-xl overflow-hidden ${css}`} onClick={handle}>
            {children}
        </div>
    )
}

export default CardImg