import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <header className="masthead text-white text-left">
                <div className="overlay"></div>
                <div id="businessCard" className="col-sm-10">
                    <div className="row">
                        <div className="col-xl-9">
                            <h1 className="text-uppercase font-weight-bolder">Lokale mieszkalne</h1>
                            <p>
                                <i className="fas fa-envelope pl-1"></i><span className="ml-4 h4 font-weight-bolder">szyndler1313@gmail.com</span>
                                <br/><br/>
                                <i className="fas fa-mobile-alt text-dark fa-2x "></i><span className="ml-4 h3 text-dark fon font-weight-bold">693 419 740</span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
    );
    }
    }

    export default Header;