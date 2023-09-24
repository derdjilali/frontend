import React from 'react'
import ImgFooter from '../assets/logo/logo-footer.svg'
import IcFb from '../assets/icons/ic-fb.svg'
import IcInsta from '../assets/icons/ic-insta.svg'
import IcLinkedin from '../assets/icons/ic-linkedin.svg'
import IcTwitter from '../assets/icons/ic-twitter.svg'
import IcLang from '../assets/icons/ic-lang.svg'
import IcDown from '../assets/icons/ic-down.svg'

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
            <div className='col-span-2 flex flex-col justify-center items-end'>
                <div className='flex items-center w-full justify-end'>
                    <div className='mr-4 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                        <img src={IcFb} alt="" className='w-[25px]'/>
                    </div>
                    <div className='mr-4 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                        <img src={IcInsta} alt="" className='w-[25px]'/>
                    </div>
                    <div className='mr-4 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                        <img src={IcLinkedin} alt="" className='w-[25px]'/>
                    </div>
                    <div className='mr-4 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                        <img src={IcTwitter} alt="" className='w-[25px]'/>
                    </div>
                </div>
                <div className='cursor-pointer rounded-lg border border-white flex items-center justify-between px-4 py-2 mt-4 w-[200px]'>
                    <div className='flex items-center'>
                        <img src={IcLang} alt="" className='w-6'/>
                        <p className='font-semibold text-white text-sm mr-4'>العربية - عر</p>
                    </div>
                    <img src={IcDown} alt="" className='w-4'/>
                </div>
            </div>
        </div>
    )
}

export default Footer