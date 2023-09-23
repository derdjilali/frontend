import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SocialMedia from '../ui/SocialMedia'
import {
    Images, Logos, Icons
} from '../../constants'

const Contact = () => {
    const [sendMsg, showSendMsg] = useState(false)

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className='bg-primary-200 w-full overflow-hidden'>
            <div className='responsive relative py-10 md:py-20 mb-10 md:mb-0' id='contact'>
                <div className='md:grid grid-cols-12 '>
                    <img src={Images.Shape} alt="" className='absolute md:-mt-10 left-0 2xl:left-[190px] top-[70px] 2xl:top-[350px] md:top-1/2 md:-translate-y-1/2  md:h-[600px] scale-125 md:scale-100 2xl:hidden'/>
                    <img src={Images.GrayShape} alt="" className='absolute -left-[380px] -top-[120px] 2xl:-left-[800px] 2xl:-top-[200px] 2xl:scale-x-150 hidden xl:block'/>
                    <div className='rounded-xl col-span-4 mt-6 2xl:pl-8'>
                        <h1 className='text-lg md:text-2xl font-bold mt-8 w-[200px] mb-4 text-white' data-aos='fade-up' data-aos-once="true">Let’s discuss on something <span className='text-primary-200'>cool</span> together</h1>
                        <p className='mt-2 text-sm mb-6 text-white w-full md:w-[250px]' data-aos='fade-up' data-aos-once="true">Thanks for visiting my portfolio! I'd love to hear from you. If you're interested in discussing a project, potential collaboration, or anything else, drop me a line using this contact form.</p>
                        <div className='flex items-center w-fit' data-aos='fade-right' data-aos-once="true">    
                            <SocialMedia/>
                        </div>
                    </div>

                    <div className='col-span-2 z-40 md:mt-[270px] hidden md:block mr-4 2xl:mr-10 2xl:mt-[290px]'>
                        <img src={Images.Line4} alt="" />
                    </div>
                    
                    <div className='col-span-6 p-4 md:p-8 bg-white rounded-xl z-30 mt-10 md:mt-0 relative'>
                    </div>
                </div>

                <div className='mt-10 md:mt-28 pt-10 flex flex-col md:flex-row items-center justify-between'>
                    <img src={ Logos.Logo} alt="" />
                    <div className='mt-8 md:mt-0'>
                        <p className='text-center text-white'>Copyright ©2023 All rights reserved <br />This template is made by Salim Baghzouz</p>
                    </div>
                    <div className='flex items-center mt-4 md:mt-0'>
                        <a href="https://www.facebook.com/CSalim7" target='_blank'>
                            <div className='bg-white rounded-full flex items-center justify-center mr-4 w-[30px]'>
                                <img src={Icons.Facebook} alt="" className='p-2'/>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/salimbaghzouz/" target='_blank'>
                            <div className='bg-white rounded-full flex items-center justify-center w-[30px]'>
                                <img src={Icons.Instagram} alt="" className='p-2'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact