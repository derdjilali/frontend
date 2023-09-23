import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Icons
} from '../../constants'

const SocialMedia = () => {
    return (
        // <ul className='flex-col items-center fixed bottom-0 hidden md:flex left-10 lg:left-24 xl:left-48'>
        <>
            <ul className=''>
                <li className='pb-4 bg-bg-100 p-2 h-10 rounded-md flex mr-2'>
                    <img src={Icons.Email} alt="" />
                    <a href='mailto:contact@salimbaghzouz.com' className='text-sm ml-4 text-white'>
                        contact@salimbaghzouz.com
                    </a>
                </li>
                <li className='pb-4 bg-bg-100 p-2 h-10 rounded-md flex mr-2'>
                    <img src={Icons.Phone} alt="" />
                    <a href='tel:+213552559966' className='text-sm ml-4 text-white'>
                        +213552559966
                    </a>
                </li>
                <li className='pb-4  bg-bg-100 p-2 h-10 rounded-md flex mr-2 text-sm'>
                    <img src={Icons.Address} alt="" />
                    <p className='text-sm ml-4 text-white'>
                        Algiers, Algeria.
                    </p>
                </li>
            </ul>
        </>
    )
}

export default SocialMedia
