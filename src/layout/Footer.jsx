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
        <div className='bg-[#22201E] py-20'>
            <div className="responsive grid grid-cols-1 md:grid-cols-6">
                <div className='mb-6 md:mb-0 md:col-span-2 flex items-center mx-auto'>
                    <img src={ImgFooter} alt="" className='bg-cover w-[200px]'/>
                </div>
                <div className='flex flex-col mt-10'>
                    <h4 className='text-center md:text-right mt-4 text-white font-medium text-lg mb-4'>اكتشف</h4>
                    <ul>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>الشروط والأحكام</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>الخصوصيه</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>مساعدة</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>الثقة والأمان</li>
                    </ul>
                </div>
                <div className='flex flex-col mt-10'>
                    <h4 className='text-center md:text-right mt-4 text-white font-medium text-lg mb-4'>المحتوى</h4>
                    <ul>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>نبذه عن المنصه</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>ارشيف سينما الجزائر</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-2'>سينمائيو الجزائر</li>
                        <li className='text-center md:text-right text-white text-sm font-extralight mb-'>اخر المستجدات</li>
                    </ul>
                </div>
                <div className='mt-6 md:mt-0 md:col-span-2 flex flex-col justify-center items-center md:items-end'>
                    <div className='flex items-center w-full justify-center md:justify-end'>
                        <div className='mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                            <img src={IcFb} alt="" className='w-[25px]'/>
                        </div>
                        <div className='mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                            <img src={IcInsta} alt="" className='w-[25px]'/>
                        </div>
                        <div className='mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
                            <img src={IcLinkedin} alt="" className='w-[25px]'/>
                        </div>
                        <div className='mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#272523]'>
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
        </div>
    )
}

export default Footer