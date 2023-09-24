import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArchiveSearch from "./pages/ArchiveSearch";
import Home from "./pages/Home";

function App() {
    const path = window.location.pathname


  return (
    <ChakraProvider>
      <div className="App w-full overflow-hidden">
        <div className='fixed top-0 w-full text-center bg-black text-white z-[100]'>
          VERSION BETA v1.0.0 - UNDER DEVELOPMENT
        </div>

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
