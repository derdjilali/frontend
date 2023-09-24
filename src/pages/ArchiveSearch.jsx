import React, { useEffect, useState } from 'react'
import movies from '../data/movies.json'
import CardMovie from '../components/ui/CardMovie'
import IcVideo from '../assets/icons/ic-video.svg'


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
import CustomButton from '../components/ui/CustomButton'
import NavBar2 from '../layout/NavBar2'

const ArchiveSearch = () => {
    const [selected, setSelected]= useState(-1)

    const [more, setMore] = useState(movies.length)

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handle = (id) => {
        setSelected(id)
        onOpen()
    }

    const [active, setActive] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='responsive relative bg-alger bg-cover'>
            <NavBar2/>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[#F4C285] bg-opacity-60'></div>
            
            <div className='pt-32 z-30 relative w-full mb-10 md:w-2/3 mx-auto'>
                <button className='bg-[#53391C] text-white rounded-lg absolute left-4 bottom-2 px-3'>بحث</button>
                <input type="text" className='rounded-md border-2 border-[#53391C] w-full h-[40px] bg-transparent'/>
            </div>

            <div className='relative z-30 mb-10 flex flex-col md:flex-row items-center justify-between md:w-2/3 md:mx-auto w-full'>
                
                <div onClick={()=>setActive(1)} className={`px-10 md:px-0 mb-2 md:mb-0 md:w-[31%] justify-center rounded-lg flex items-center ${active === 1 ? 'bg-[#53391C]' : 'cursor-pointer bg-[#C98E4B]'} py-2`}>
                    <img src={IcVideo } alt="" className='w-6 ml-2'/>
                    <p className='text-white font-semibold'>الافلام التاريخية</p>
                </div>
                <div onClick={()=>setActive(2)} className={`px-10 md:px-0 mb-2 md:mb-0 md:w-[31%] justify-center rounded-lg flex items-center ${active === 2 ? 'bg-[#53391C]' : 'cursor-pointer bg-[#C98E4B]'} py-2`}>
                    <img src={IcVideo } alt="" className='w-6 ml-2'/>
                    <p className='text-white font-semibold'>الافلام الدرامية</p>
                </div>
                <div onClick={()=>setActive(3)} className={`px-10 md:px-0 mb-2 md:mb-0 md:w-[31%] justify-center rounded-lg flex items-center ${active === 3 ? 'bg-[#53391C]' : 'cursor-pointer bg-[#C98E4B]'} py-2`}>
                    <img src={IcVideo } alt="" className='w-6 ml-2'/>
                    <p className='text-white font-semibold'>الافلام الفكاهية</p>
                </div>
            </div>
            
            <div>
                <h1 className='relative z-30 text-3xl font-bold text-center text-white'>
                    {active === 1 && 'الافلام التاريخية'}
                    {active === 2 && 'الافلام الدرامية'}
                    {active === 3 && 'الافلام الفكاهية'}
                </h1>
                <div className='border-t-2 border-primary-500 rounded-full w-[200px] mt-2 mb-10 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 pb-14'>
                {
                    movies.map((item, idx) => 
                        Math.random() > 0.3 && <CardMovie key={idx} item={item} handle={()=>handle(idx)} />
                    )
                }
            </div>

            <div className='relative z-30 mx-auto pb-32 flex items-center justify-center'>
                <CustomButton title={'1'} css={'px-5 py-3 text-sm mt-10 mx-2'} handleBtn={()=>setMore(movies.length)}/>
                <CustomButton title={'2'} css={'px-5 py-3 text-sm mt-10 mx-2'} handleBtn={()=>setMore(6)}/>
                <CustomButton title={'3'} css={'px-5 py-3 text-sm mt-10 mx-2'} handleBtn={()=>setMore(3)}/>
            </div>

            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {selected > -1 &&
                            <div className='text-sm font-medium'>
                                <img src={require('../assets/img/' + movies[selected].image)} alt="" className='object-cover w-full h-[200px] rounded-lg mb-4 mt-4' />
                                <h2 className='text-2xl font-bold'>{movies[selected].title}</h2>
                                <div className='flex item-center mt-6'>
                                    <p className='ml-2'>الاخراج:</p>
                                    <p>{movies[selected].author}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>سيناربو:</p>
                                    <p className='ml-2'>{movies[selected].senareo}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>تصوير:</p>
                                    <p className='ml-2'>{movies[selected].filmer}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>انتاج:</p>
                                    <p className='ml-2'>{movies[selected].product}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>حوار:</p>
                                    <p className='ml-2'>{movies[selected].dialog}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>مدير الاخراج:</p>
                                    <p className='ml-2'>{movies[selected]['directeur-filmer']}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>مدير الانتاج:</p>
                                    <p className='ml-2'>{movies[selected]['directeur-prod']}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>موسيقى:</p>
                                    <p className='ml-2'>{movies[selected].music}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>تركيب:</p>
                                    <p className='ml-2'>{movies[selected].construct}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>صوت:</p>
                                    <p className='ml-2'>{movies[selected].sound}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>ديكور:</p>
                                    <p className='ml-2'>{movies[selected].decor}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>تاربخ:</p>
                                    <p className='ml-2'>{movies[selected].date}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>المدة:</p>
                                    <p className='ml-2'>{movies[selected].duree}</p>
                                </div>
                                <div className='flex item-center'>
                                    <p className='ml-2'>الحجم:</p>
                                    <p className='ml-2'>{movies[selected].size}</p>
                                </div>
                                {movies[selected].authors && <div className='flex item-center'>
                                    <p className='ml-2'>تمثيل:</p>
                                    <ul className=''>
                                        {
                                            movies[selected].authors.map((a, idA) =>
                                                <li key={idA} className='ml-4'>{a}</li>
                                            )
                                        }
                                    </ul>
                                </div>}
                                <div className='flex item-center'>
                                    <p className='mt-6'>{movies[selected].description}</p>
                                </div>
                                <div>
                                    <p className='ml-2'>{movies[selected].other}</p>
                                </div>
                            </div>
                            }
                    </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ArchiveSearch