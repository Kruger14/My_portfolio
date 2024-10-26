import './App.css'
import Contactme from './pages/Contactme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/SkillsResume';
import ProfileCard from './pages/Profilecard';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [open, setisopen] = useState(false);

  const openit = () => {
    setisopen(!open);
    const x = document.getElementsByClassName('nav-container')[0];
    if (x) {
      x.style.display = x.style.display === 'none' ? 'block' : 'none';
    }
  }


  return (
    <>
      <div className='layout'>
        <div className='nav-container'>
          <ProfileCard />
        </div>
        <div className='main-container'>
          <div className="icon-container" onClick={openit}>
            {open ?
              <div className='icon'>
                <GiHamburgerMenu color='black' size={30} />
              </div> : <div className='icon'>
                <IoCloseOutline color='black' size={30} />
              </div>
            }
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contactme />} />
          </Routes>
          <Projects />
          <Skills />
          <Contactme />
        </div>
      </div >
    </>
  )
}

export default App;
