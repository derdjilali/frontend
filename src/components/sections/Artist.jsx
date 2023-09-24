import React, { useEffect, useState } from 'react'
import artist from '../../data/artist.json'
import CardImg from '../ui/CardImg'
import CustomButton from '../ui/CustomButton'
import CardArtist from '../ui/CardArtist'

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

const Artist = () => {
    const [more, setMore] = useState(false)

    const [selected, setSelected] = useState(-1)

    const handleButton = () => {
        setMore(!more)
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handle = (id) => {
        setSelected(id)
        onOpen()
    }

    return (
        <div id='sec3' className='responsive flex flex-col justify-center items-center bg-Artist2 py-20 bg-artist bg-cover bg-center relative'>
            <div className="w-fit flex flex-col items-center mb-14">
                <h1 className='text-2xl md:text-5xl font-extrabold text-white mb-4' data-aos='fade-left' data-aos-once="true">سينمائيو الجزائر</h1>
                <div className='border-t-2 border-primary-500 rounded-full w-1/3' data-aos='fade-right' data-aos-once="true"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8'>
                {
                    artist.slice(0, !more ? 3 : artist.length).map((item, idx) => 
                        <div key={idx} data-aos='zoom-in' data-aos-once="true">
                            <CardArtist key={idx} item={item} handle={()=>handle(idx)} />
                        </div>
                    )
                }
            </div>
            <div data-aos='fade-up' data-aos-once="true">
                <CustomButton title={more ? 'اخفاء' : `عرض المزيد`} css={'px-20 py-3 text-sm mt-10'} handleBtn={handleButton}/>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {selected > -1 &&
                            <div className='text-sm font-medium'>
                                <img src={require('../../assets/img/' + artist[selected].image)} alt="" className='object-cover w-full h-[400px] rounded-lg mb-4 mt-4' />
                                <h2 className='text-2xl font-bold'>{artist[selected].name}</h2>
                                <p className='mt-4'>{artist[selected].description}</p>
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

export default Artist