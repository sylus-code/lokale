import React, {Component} from 'react';
import PulseButton from "./PulseButton";

class Header extends Component{
    render() {
        return (
            <header className="masthead  text-white text-left " id='/'>
                {/*<div className="overlay"></div>*/}
                <div id="businessCard" className="col-12 col-md-8 order-1">
                    <div className="row ">
                        <div className="col-xl-9 pl-5">
                            <h1 className="text-uppercase font-weight-bolder">Lokale mieszkalne</h1>
                            <p>
                                <a href='mailto:szyndler1313@gmail.com' className="h3 font-weight-bolder text-white"><i className="fas fa-envelope h2 mb-0 mt-2 mr-2"></i>szyndler1313@gmail.com</a>
                                <br/><br/>
                                <a href='tel:693419740' className="h2 text-dark font-weight-bold"><i className="fas fa-mobile-alt ml-1 mr-2"></i>693 419 740</a>
                            </p>
                        </div>
                    </div>
                </div>
                <PulseButton className='order-2'/>
            </header>
    );
    }
    }

    export default Header;