import logo from './logo.svg';
import './App.css';
import NavScrollExample from './Components/Navbar';
import Caro from './Carousel/Carousel';
import React, { Component } from 'react';
import Header from './Header/Header';
import Testimonials from './Testimonial/Testimonial';
import Model from './Models/Model';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
function App() {
  return (
    
    <div className="App">
    
     <NavScrollExample/>
     <Caro/>
     <Header/>
     <Testimonials/>
     <Model/>
     <Gallery/>
     <Footer/>
    </div>
  );
}

export default App;
