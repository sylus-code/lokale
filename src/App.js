import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/simple-line-icons.css';
import './assets/css/fontawesome.min.css';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IconsGrid from "./components/IconsGrid";
import ImageShowcase from "./components/ImageShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <ImageShowcase/>
        <Testimonials/>
        <CallToAction/>
        <IconsGrid/>
        <Footer/>
    </div>
  );
}

export default App;
