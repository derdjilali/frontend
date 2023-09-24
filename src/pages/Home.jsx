import React from 'react'
import Header from '../components/sections/Header'
import About from '../components/sections/About'
import Artist from '../components/sections/Artist'
import News from '../components/sections/News'
import Footer from '../layout/Footer'
import Archive from '../components/sections/Archive'

const Home = () => {
    return (
        <div>

            <Header/>

            <About />

            <Archive />

            <Artist />
            
            <News/>

        </div>
    )
}

export default Home