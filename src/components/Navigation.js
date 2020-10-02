import React, {Component} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";

class Navigation extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

        return (<nav className="navbar navbar-dark  text-white bg-dark fixed-top " id="navbar">
                <div className="container">
                    <i className="fas fa-home navbar-brand text-warning"
                        alt="Logo."
                        onClick={this.scrollToTop}
                    ><span className='font-weight-bold text-monospac ml-1'>Lokale Mieszkalne</span></i>
                    <ul className="nav-items nav">
                        {/*<li className="nav-item ml-2">*/}
                            {/*<Link*/}
                                {/*to='/'*/}
                                {/*activeClass="active"*/}
                                {/*spy={true}*/}
                                {/*smooth={true}*/}
                                {/*offset={-70}*/}
                                {/*duration={500}>Lokale Mieszkalne</Link></li>*/}
                        <li className="nav-item ">
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
        {/*<nav" className="navbar navbar navbar-dark bg-dark fixed-top >*/
        }
        {/*<div className="container">*/
        }
        {/*<Link className="navbar-brand" to="/">Lokale Mieszkalne</Link>*/
        }
        {/*<Link className="nav-item" to="/about">O nas</Link>*/
        }
        {/*<Link className="nav-item" to="/offer">Oferta</Link>*/
        }
        {/*<Link className="nav-item" to="/contact">Kontakt</Link>*/
        }
        {/*</div>*/
        }
        {/*/!*<Link*!/*/
        }
        {/*/!*activeClass="active"*!/*/
        }
        {/*/!*to="/"*!/*/
        }
        {/*/!*spy={true}*!/*/
        }
        {/*/!*smooth={true}*!/*/
        }
        {/*/!*offset={-70}*!/*/
        }
        {/*/!*duration={500}*!/*/
        }
        {/*/!*>*!/*/
        }
        {/*</nav>*/
        }

    }
}

export default Navigation;