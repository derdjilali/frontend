import React, { useEffect, useState } from 'react'
import aboutData from '../../data/about.json'
import aboutDarkData from '../../data/about_dark.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CardImg from '../ui/CardImg';

const About = () => {
    const items = ['about me', 'skills', 'experience', 'education']

    return (
        <div className='responsive flex flex-col md:flex-row items-center justify-between bg-primary-400 py-20'>
            <div className='w-1/2 ml-10'>
                <h3 className='text-white text-lg font-bold mb-6'>بك في "سينماتوغرافي": بوابتك إلى الترفيه الجزانري</h3>
                <p className='text-white text-sm mb-4'>
                    نرحب بك في "السينمائية" المنصة الرائدة للبث في الجزائر التي تأخذك
                    في رحلة مثيرة عبر نسيج غني من الثقافة والسينما والترفيه الجزائري
                    اننمس في عالم جذاب يقدم لك محتوى جزائري رائع في مجالات السينما
                    .والموسيقى والتلفزيون، وكل خلك بسهولة عند متناول يحيك
                </p>
                <p className='text-white text-sm'>
                    فىي "السينمائية" نلتزم بتقديم أفضل ما في إلتراث الثتقافي والفني الجزائري
                    ٣ كنت من محبي الأفلام الجزائرية المثيرة أو الموسيقى الساحرة
                    أ البرامج التلفزيونية المشوقة، لدينا كل ما تحتاجه في مكان واحد، مصمم
                    .لتلبية احتياجات ترفيصك،
                </p>
                <div className='h-1 border-t-2 rounded-full mt-8 border-primary-500 w-1/3'></div>
            </div>
            <div className='w-fit mt-6 md:mt-0 flex items-center'>
                <CardImg css={'h-[180px] w-[120px]'}>
                    <img src={require('../../assets/img/img1.jpg')} className='h-full w-full object-cover' alt="" />
                </CardImg>
                <CardImg css={'h-[250px] w-[180px] mx-2'}>
                    <img src={require('../../assets/img/img2.jpg')} className='h-full w-full object-cover' alt="" />
                </CardImg>
                <CardImg css={'h-[180px] w-[120px]'}>
                    <img src={require('../../assets/img/img3.jpg')} className='h-full w-full object-cover' alt="" />
                </CardImg>
            </div>
        </div>
    )
}

export default About