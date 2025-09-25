import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import { Toaster } from "./components/ui/toaster";

const Sparkles = () => {
  return (
    <div className="sparkle-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <Sparkles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </Layout>
    </HashRouter>
  );
}

export default App;