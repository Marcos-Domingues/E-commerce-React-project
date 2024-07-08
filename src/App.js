import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Square from './components/squares';
import Footer from './components/footer';
import Shop from './components/shop';
import Product1 from './components/product1';

const App = () => (
  <Router>
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/squares" element={<Square />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
