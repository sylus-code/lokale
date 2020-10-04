import React, {Component} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import './../index.css';

class Navigation extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (<nav id='navigation' className="navbar navbar-inverse text-white bg-dark fixed-top ">

                <div className="container">
                    <div className="navbar-header">
                        <i className="fas fa-home navbar-brand text-warning"
                           alt="Logo."
                           onClick={this.scrollToTop}>
                            <span className='font-weight-bold text-monospac ml-1'>Lokale Mieszkalne</span></i>
                    </div>

                    <ul className="nav-items nav">
                        <li className="nav-item">
                            <Link
                                to='about'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>O nas</Link></li>
                        <li className="nav-item ml-3">
                            <Link to='offer'
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}>Oferta</Link></li>
                        <li className="nav-item ml-3">
                            <Link
                                to='contact'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Kontakt</Link></li>
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Navigation;