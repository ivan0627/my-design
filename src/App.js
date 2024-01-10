import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Furniture from './Components/pages/Furniture'
import Kitchen from './Components/pages/Kitchen'
import Room from './Components/pages/Room'
import About from './Components/pages/About'
import Footer from './Components/Footer'
import ProductsAPI from './Components/pages/ProductsAPI';
import Maintenance from './Components/pages/Maintenance';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className='app_container'>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ProductsAPI" element={<ProductsAPI />} />
          <Route path="/furniture" element={<Furniture category="furniture"/>} />
          <Route path="/kitchen" element={<Kitchen category="kitchen"/>} />
          <Route path="/room" element={<Room category="room"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/maintenance" element={<Maintenance />} />
          {/* Default route */}
        <Route path="*" element={<Home />} />
        </Routes >
      <Footer />
    </Router>
    </div>
  );
}

export default App;
