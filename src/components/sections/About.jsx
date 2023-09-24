import React, { useEffect, useState } from 'react'
import aboutData from '../../data/about.json'
import aboutDarkData from '../../data/about_dark.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CardImg from '../ui/CardImg';

const About = () => {
    return (
        <div id='sec1' className='flex flex-col md:flex-row items-center justify-between bg-primary-400 py-20'>
            <div className='responsive flex flex-col md:flex-row items-center justify-between'>
                <div className='md:w-1/2 md:ml-10'>
                    <h3 className='text-white text-lg font-bold mb-6 text-center md:text-right title' data-aos='fade-down' data-aos-once="true">مرحبا بك في "سينماتوغرافي": بوابتك إلى الترفيه الجزانري</h3>
                    <p className='text-white text-sm mb-4 text-center md:text-right' data-aos='fade-left' data-aos-once="true">
                        نرحب بك في "السينمائية" المنصة الرائدة للبث في الجزائر التي تأخذك
                        في رحلة مثيرة عبر نسيج غني من الثقافة والسينما والترفيه الجزائري
                        انغمس في عالم جذاب يقدم لك محتوى جزائري رائع في مجالات السينما
                        .والموسيقى والتلفزيون، وكل ذلك بسهولة عند متناول يحيك
                    </p>
                    <p className='text-white text-sm text-center md:text-right' data-aos='fade-left' data-aos-once="true">
                        في "السينمائية" نلتزم بتقديم أفضل ما في التراث الثقافي والفني الجزائري
                        ٣ كنت من محبي الأفلام الجزائرية المثيرة أو الموسيقى الساحرة
                        أ البرامج التلفزيونية المشوقة، لدينا كل ما تحتاجه في مكان واحد، مصمم
                        .لتلبية احتياجات ترفيصك،
                    </p>
                    <div className='h-1 border-t-2 rounded-full mt-8 border-primary-500 w-1/3 mx-auto md:mx-0' data-aos='fade-left' data-aos-once="true"></div>
                </div>
                <div className='w-fit mt-6 md:mt-0 flex items-end'>
                    <div data-aos='zoom-in' data-aos-once="true">
                        <CardImg css={'md:h-[200px] h-[150px] w-[80px] md:w-[140px] mb-4'}>
                            <img src={require('../../assets/img/img1.jpg')} className='h-full w-full object-cover' alt=""/>
                        </CardImg>
                    </div>
                    <div data-aos='zoom-in' data-aos-once="true">
                        <CardImg css={'h-[210px] md:h-[280px] w-[140px] md:w-[200px] mx-2'}>
                            <img src={require('../../assets/img/img2.jpg')} className='h-full w-full object-cover' alt=""/>
                        </CardImg>
                    </div>
                    <div data-aos='zoom-in' data-aos-once="true">
                        <CardImg css={'md:h-[200px] h-[150px] w-[80px] md:w-[140px] mb-4'}>
                            <img src={require('../../assets/img/img3.jpg')} className='h-full w-full object-cover' alt=""/>
                        </CardImg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About