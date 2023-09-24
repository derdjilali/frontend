import React, { useEffect } from 'react'
import Header from '../components/sections/Header'
import About from '../components/sections/About'
import Artist from '../components/sections/Artist'
import News from '../components/sections/News'
import Footer from '../layout/Footer'
import Archive from '../components/sections/Archive'
import NavBar from '../layout/NavBar'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <div>
            <NavBar/>
            
            <Header/>

            <About />

            <Archive />

            <Artist />
            
            <News/>

        </div>
    )
}

export default Home