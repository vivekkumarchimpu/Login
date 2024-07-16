import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import LeftSidebar from './pages/LeftSidebar';
import RightSidebar from './pages/RightSidebar';



function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <div className="row">
            <Header />
        </div>
        <div className='row logintheam'>
          <div className='col-5'>
            <LeftSidebar />
          </div>
          <div className='col-7'>
            <RightSidebar />
          </div>
        </div>
        <div className='footer'>

        </div>
        </BrowserRouter>
      </div>
      
    </>
  );
}

export default App;
