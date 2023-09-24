import { useEffect, useRef, useState } from "react";
import Button from "../ui/CustomButton";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import IcPlay from '../../assets/icons/ic-play.svg'


const Header = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="h-screen overflow-hidden relative" id="home">
            <video className="h-full object-cover w-full" ref={videoRef} src={require('../../assets/videos/intro.mp4')} autoPlay={true}></video>
            <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-30">
                <div className="cursor-pointer flex items-center" onClick={handlePlayVideo} disabled={isPlaying} data-aos='zoom-in' data-aos-once="true">
                    <p className="text-white font-semibold text-3xl cursor-pointer title">رؤية</p>
                    <img src={IcPlay} alt=""  className="w-10 mx-3"/>
                    <p className="text-white font-semibold text-3xl cursor-pointer title">الملخص</p>
                </div>
            </div>
        </div>
    );
}

export default Header;