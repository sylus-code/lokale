import React, {Component} from 'react';
import editPic from './../assets/icons/icons8-edit-property-100.png';
import moneyBox from './../assets/icons/icons8-money-box-100.png';
import cash from './../assets/icons/icons8-get-cash-100.png';
import goal from './../assets/icons/icons8-goal-100.png';
import family from './../assets/icons/icons8-family-100.png';


class IconsGrid extends Component{
    render() {
        return (
            <section className="features-icons bg-light text-centericonsGrid" id='about'>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="far fa-handshake m-auto  font-weight-light" alt="uścisk-dłoni"/>
                                </div>
                                <p className="lead mb-0">Nie pobieramy prowizji</p>
                            </div>
                        </div>
                        <div className="col-sm-6  col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <img src={family} className="m-auto hover-zoom font-weight-bolder" alt="family"/>
                                </div>
                                <p className="lead mb-0">Kredyty z dopłatami w programie <span className="text-uppercase">"rodzina na swoim"</span> od 1,5% marży</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="fas fa-home m-auto font-weight-light" alt="dom"/>
                                </div>
                                <p className="lead mb-0">Kredyty hipoteczne na zakup mieszkania i domu</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <img src={goal} className="m-auto hover-zoom" alt="cel"/>
                                </div>
                                <p className="lead mb-0">Kredyty 28 banków w jednym miejscu</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-lg-5">
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="fas fa-shield-alt m-auto font-weight-light" alt="tarcza"/>
                                </div>
                                <p className="lead mb-0">Ubezpieczenie nieruchomości<br/><span className="text-uppercase">gratis</span></p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <img src={cash} className="m-auto hover-zoom font-weight-lighter" alt="pieniądze"/>
                                </div>
                                <p className="lead mb-0">Zysk z inwestycji może spłacić Twój kredyt</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <img src={moneyBox} className="m-auto hover-zoom font-weight-lighter" alt="skarbonka"/>
                                </div>
                                <p className="lead mb-0">Zamieniamy Twój kredyt na tańszy</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <img src={editPic} className="m-auto hover-zoom font-weight-lighter" alt="dokument"/>
                                </div>
                                <p className="lead mb-0">Pomoc w formalnościach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default IconsGrid;