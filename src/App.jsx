import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Header from './components/Header';
import ToptBottom from './components/ToptBottom';
import Error from './error';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/service' element={<Service />}>Service</Route>
            <Route path='/about' element={<About />}>About</Route>
            <Route path='/contact' element={<Contact />}>Contact</Route>
            <Route path='*' element={<Error/>}>Error</Route>
          </Routes>
          <ToptBottom/>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App