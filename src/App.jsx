import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArchiveSearch from "./pages/ArchiveSearch";
import Home from "./pages/Home";
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const path = window.location.pathname
  return (
    <ChakraProvider>
      <div className="App w-full overflow-hidden">
      

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<ArchiveSearch />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
