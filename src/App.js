import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className=' body1'>
     <div>
      image
      </div>
      <div>
        about, services, why us
      </div>
      <div>
       ships, planes , trucks & vehicles
      smart storage solutions & containers
      real time tracking website
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
