import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header.js';
import LeftSidebar from './pages/LeftSidebar.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import ContactUs from './pages/ContactUs.js';
import Registration from './pages/Registration.js';
import Login from './pages/Login.js';

import UniverseVar from './UniverseVar.js';

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <UniverseVar>
        <div className="row">
            <Header />
        </div>
        <div className='row logintheam'>
          <div className='col-5'>
            <LeftSidebar />
          </div>
          <div className='col-7'>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/users/registration' element={<Registration />} />
              <Route path='/users/login' element={<Login />} />
            </Routes>
            
          </div>
        </div>
        <div className='footer'>

        </div>
        </UniverseVar>
        </BrowserRouter>
      </div>
      
    </>
  );
}

export default App;
