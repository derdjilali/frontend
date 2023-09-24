import About from "./components/sections/About";
import Archive from "./components/sections/Archive";
import NavBar from './layout/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import {
    Images, Icons
} from './constants'
import Header from "./components/sections/Header";
import { useEffect, useState } from "react";
import NavBarMob from "./layout/NavBarMob";
import Artist from "./components/sections/Artist";
import News from "./components/sections/News";
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArchiveSearch from "./pages/ArchiveSearch";
import Home from "./pages/Home";

function App() {
  
  return (
    <ChakraProvider>
      <div className="App w-full overflow-hidden">
        <div className='fixed top-0 w-full text-center z-50 bg-black text-white'>
          VERSION BETA v1.0.0 - UNDER DEVELOPMENT
        </div>

        <NavBar />
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<ArchiveSearch />} />
          </Routes>
        </Router>

        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
