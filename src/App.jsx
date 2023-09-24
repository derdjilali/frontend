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

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark')
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const [files, setFiles] = useState([])

  const handleShowDetails = (path) => {
    const files = require.context(path, false, /\.jpg$/);
    const fileNames = files.keys().map(key => key.split('/').pop());
    console.log(fileNames);
  }

  return (
    <ChakraProvider>
      <div className="App w-full overflow-hidden">
        <div className='fixed top-0 w-full text-center z-50 bg-black text-white'>
          VERSION BETA v1.0.0 - UNDER DEVELOPMENT
        </div>

        <NavBar/>
        {/* <NavBarMob click={handleThemeSwitch} /> */}
        
        <Header/>

        <About />

        <Archive />

        <Artist />
        
        <News/>

        <Footer />
        
        {/* {scrollPosition > 100 && (
          <>
            <button onClick={handleClick} className="border border-white dark:border-secondary-200 fixed rounded-full p-2 bg-primary-200 right-8 2xl:right-36 bottom-24 md:bottom-14 dark:hidden z-40">
              <img src={Icons.Up} alt="" className="w-8"/>
            </button>
            <button onClick={handleClick} className="border border-white dark:border-secondary-200 fixed rounded-full p-2 bg-primary-200 right-8 2xl:right-36 bottom-24 md:bottom-14 hidden dark:block z-40">
              <img src={Icons.UpDark} alt="" className="w-8"/>
            </button>
          </>
        )} */}

      </div>
    </ChakraProvider>
  );
}

export default App;
