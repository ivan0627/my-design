import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/pages/Products'
import Furniture from './Components/pages/Furniture'
import Kitchen from './Components/pages/Kitchen'
import Room from './Components/pages/Room'
import About from './Components/pages/About'
import Footer from './Components/Footer'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='app_container'>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/About" element={<About />} />
          {/* Default route */}
        <Route path="*" element={<Home />} />
        </Routes >
      <Footer />
    </Router>
    </div>
  );
}

export default App;
