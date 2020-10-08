import React, {Component} from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/simple-line-icons.css';
import './assets/css/fontawesome.min.css';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IconsGrid from "./components/IconsGrid";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import {BrowserRouter as Router} from 'react-router-dom';
import OfferFormik from "./components/OfferFormik";


class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <Navigation/>
                    <Header/>
                    <IconsGrid/>
                    <ImageShowcase/>
                    <CallToAction/>
                    <OfferFormik/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
