import React, {Component} from 'react';
import PulseButton from "./PulseButton";


class Header extends Component {


    render() {
        return (
            <header className="masthead  text-white text-left " id='/'>

                <div id="businessCard" className="col-12 col-md-8 order-1">
                    <div className="row ">
                        <div className="col-xl-9">
                            <h1 className="text-uppercase ">Lokale mieszkalne</h1>
                            <p>
                                <a href='mailto:kontakt@lokalemieszkalne.eu' className="text-white">
                                    <i className="fas fa-envelope mb-0 mt-2 mr-2"/>kontakt@lokalemieszkalne.eu</a>
                                <br/>
                                <a href='tel:693419740' className="text-dark font-weight-bold">
                                    <i className="fas fa-mobile-alt ml-1 mr-2"/>693 419 740</a>
                            </p>
                        </div>
                    </div>
                </div>

                <PulseButton/>


            </header>
        );
    }
}

export default Header;