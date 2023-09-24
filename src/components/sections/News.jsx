import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../ui/CustomButton'
import CardImg from '../ui/CardImg'
import movies from '../../data/movies.json'

import { Swiper, SwiperSlide } from 'swiper/react';
// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const News = () => {
    const [selected, setSelected] = useState(-1)
    const [selectedOp, setSelectedOp] = useState(false)

    const swiperRef = useRef(null);

    const handleButtonClick = (slideIndex) => {
        setSelected(slideIndex)
        swiperRef.current.swiper.slideTo(slideIndex);
    };

    const handle = (slideIndex) => {
        setSelected(slideIndex)
        swiperRef.current.swiper.slideTo(slideIndex);
        onOpen()
    };
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <div id='sec4' className='flex flex-col justify-center items-center bg-News2 pt-40 pb-80 bg-news bg-cover bg-center relative'>
            <div className='responsive flex flex-col justify-center items-center'>
                <div className="w-fit flex flex-col items-center mb-14">
                    <h1 className='text-5xl font-extrabold text-white mb-4 title' data-aos='fade-right' data-aos-once="true">اخر المستجدات</h1>
                    <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-left' data-aos-once="true"></div>
                </div>
                
                <div className='hidden md:block w-[90%] z-40'>
                    <Swiper
                        ref={swiperRef}
                        onSwiper={(s)=>setSelected(s.activeIndex)}
                        centeredSlides
                        initialSlide={1}
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        className="swiper-container news"
                        onSlideNextTransitionStart={()=>selected < movies.length  && handleButtonClick(selected + 1)}
                        onSlidePrevTransitionStart={()=>selected > 0  && handleButtonClick(selected - 1)}
                    >
                        {
                            movies.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <CardImg
                                            handle = {()=>handle(idx)}
                                            item={item} css={selected!== null && selected === idx ? 'h-[500px] border border-primary-500' : 'mt-28 mx-auto brightness-[0.3] w-[250px] h-[350px] mb-0'}>
                                            <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                                        </CardImg>
                                    </SwiperSlide>
                                )}
                            )
                        }
                        {/* <SwiperSlide>Movie 1</SwiperSlide>
                        <SwiperSlide>Movie 2</SwiperSlide>
                        <SwiperSlide>Movie 3</SwiperSlide> */}
                        {/* Add more SwiperSlide components as needed */}
                    </Swiper>
                </div>
                
                <div className='md:hidden w-[80%] z-40'>
                    <Swiper
                        ref={swiperRef}
                        onSwiper={(s)=>setSelected(s.activeIndex)}
                        centeredSlides
                        slidesPerView={1}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        className="swiper-container"
                        onSlideNextTransitionStart={()=>selected < movies.length  && handleButtonClick(selected + 1)}
                        onSlidePrevTransitionStart={()=>selected > 0  && handleButtonClick(selected - 1)}
                    >
                        {
                            movies.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <CardImg
                                            handle = {()=>handle(idx)}
                                            item={item} css={selected!== null && selected === idx ? 'h-[400px]' : 'mt-20 mx-auto brightness-[0.3] w-[200px] h-[280px] mb-8'}>
                                            <img src={require(`../../assets/img/${item.image}`)} className='w-full h-full object-cover' alt={item.title} />
                                        </CardImg>
                                    </SwiperSlide>
                                )}
                            )
                        }
                        {/* <SwiperSlide>Movie 1</SwiperSlide>
                        <SwiperSlide>Movie 2</SwiperSlide>
                        <SwiperSlide>Movie 3</SwiperSlide> */}
                        {/* Add more SwiperSlide components as needed */}
                    </Swiper>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                    </ModalHeader>
                <ModalCloseButton />
                    <ModalBody>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src={require('../../assets/img/img1.jpg')} alt="" className='w-full h-[200px] object-cover rounded-lg mb-4'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require('../../assets/img/img1.jpg')} alt="" className='w-full h-[200px] object-cover rounded-lg mb-4'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require('../../assets/img/img1.jpg')} alt="" className='w-full h-[200px] object-cover rounded-lg mb-4'/>
                            </SwiperSlide>
                        </Swiper>
                        <h1 className='font-bold text-2xl mb-4'>رحل الفنان الجزائري الشهير محمد حلمي</h1>
                        <p className='font-light text-sm mb-6'>تاريخ: 24-09-2023</p>
                        <div className='border-t-2 rounded-full border-gray-300 w-[200px] mb-4'></div>
                        <p className='mb-4 text-justify'>توفي أيقونة السينما الجزائرية محمد حلمي، اليوم الأربعاء 5 يناير 2022، عن عمر يناهز 90 عاما، بحسب التلفزيون الجزائري. ولد محمد حلمي، واسمه الحقيقي أمزيان براهيمي، في 15 فبراير 1931 بأزيفون بولاية تيزي وزو. في العاشرة من عمره، حضر محمد حلمي عرضه الأول، فرق تسد، وهو مسرحية لعب فيها حسن الحسني دور نعمة. في الثالثة عشرة من عمره، غادر قريته ليذهب إلى الجزائر العاصمة حيث حصل له طبيبه - الذي كان يعاني من التهاب العظم العصوي - على وظيفة ساعٍ في شركة تأمين. وفي الوقت نفسه، أخذ دورات بالمراسلة لمدة ثلاث سنوات. وفي عام 1947، طُلب منه دور في مسرحية ولد الليل. لم يمنحه باشيتارزي سوى أدوارًا صغيرة، ولهذا السبب انضم إلى رضا الفلكي في الراديو عام 1949. حتى أنه كتب مسرحية إذاعية لقناة القبائل وسيؤديها مع الشيخ نور الدين وعبد إسكر. وفي عام 1950 عاد إلى المسرح. بعد الاستقلال، قام بتأليف العديد من الرسومات باستخدام الأناشيد وبدأ في إخراج الأفلام التلفزيونية، والأفلام القصيرة والمتوسطة الطول: شكوني ياسباغ، الغموك، إيك-شيتا، ماتفاهمين، ليستيهلاك وخاصة ما بعد النفط (1986). وفي عام 1993، أخرج فيلمه الأول "الوليف الصعيب"، وأصدر على حسابه الخاص فيلما كوميديا ​​ساخرا بعنوان "الديمقراطية - السيرك أو صرخة الصمت". رحلة معجزة، سيرة ذاتية، وحاضر الماضي. وسيتم دفن الفقيد يوم الأربعاء بعد صلاة العصر بمقبرة سيدي أمحمد بالجزائر العاصمة.</p>
                </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default News