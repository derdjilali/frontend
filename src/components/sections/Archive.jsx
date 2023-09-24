import React, { useEffect, useState } from 'react'
import movies from '../../data/movies.json'
import CardImg from '../ui/CardImg'
import CustomButton from '../ui/CustomButton'

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
import CardMovie from '../ui/CardMovie'
import { Link } from 'react-router-dom'

const Archive = () => {
    const [more, setMore] = useState(false)

    const handleButton = () => {
        setMore(!more)
    }

    const [selected, setSelected]= useState(-1)

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handle = (id) => {
        setSelected(id)
        onOpen()
    }

    return (
        <div id='sec2' className='flex flex-col justify-center items-center bg-archive bg-center bg-cover py-40'>
            <div className='responsive flex flex-col justify-center items-center'>
                <div className="w-fit flex flex-col items-center mb-14">
                    <h1 className='text-2xl md:text-5xl font-extrabold text-white mb-4 title' data-aos='fade-right' data-aos-once="true">ارشيف سينما الجزائر</h1>
                    <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-left' data-aos-once="true"></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8'>
                    {
                        movies.slice(0, !more ? 3 : movies.length).map((item, idx) => 
                            <CardMovie key={idx} item={item} handle={()=>handle(idx)} />
                        )
                    }
                </div>
                <div data-aos='fade-up' data-aos-once="true">
                    <Link to={'./movies'}>
                        <CustomButton title={`عرض المزيد`} css={'px-20 py-3 text-sm mt-10'}/>
                    </Link>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {selected > -1 &&
                            <div className='text-sm font-medium'>
                                <img src={require('../../assets/img/' + movies[selected].image)} alt="" className='object-cover w-full h-[200px] rounded-lg mb-4 mt-4' />
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

export default Archive

