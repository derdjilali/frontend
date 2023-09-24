import React from 'react'
import ImgFooter from '../assets/logo/logo-footer.svg'
import IcFb from '../assets/icons/ic-fb.svg'
import IcInsta from '../assets/icons/ic-insta.svg'
import IcLinkedin from '../assets/icons/ic-linkedin.svg'
import IcTwitter from '../assets/icons/ic-twitter.svg'

const Footer = () => {
    return (
        <div className='responsive bg-[#22201E] grid grid-cols-7 py-20'>
            <div className='col-span-2 flex items-center'>
                <img src={ImgFooter} alt="" className='bg-cover w-[200px]'/>
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-white font-medium text-lg mb-4'>titile</h4>
                <ul>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-'>test</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-white font-medium text-lg mb-4'>titile</h4>
                <ul>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-'>test</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-white font-medium text-lg mb-4'>titile</h4>
                <ul>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-2'>test</li>
                    <li className='text-white text-sm font-extralight mb-'>test</li>
                </ul>
            </div>
            <div className='flex items-center col-span-2 justify-between mr-10'>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                    <img src={IcFb} alt="" className='w-[25px]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                    <img src={IcInsta} alt="" className='w-[25px]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                    <img src={IcLinkedin} alt="" className='w-[25px]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                    <img src={IcTwitter} alt="" className='w-[25px]'/>
                </div>
            </div>
        </div>
    )
}

export default Footer