import React, {Component} from 'react';

class OfferForm extends Component {
    render() {
        return (
            <section className="text-dark text-center mt-5" id='contact'>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters">
                        <div className=" col-xl-9 mx-auto mt-3">
                            <h1 className="mb-4 text-uppercase">Wyślij zapytanie o aktualną ofertę</h1>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-8 mx-auto mb-5 mt-3">
                            <form className="order-md-1">
                                <h4 className="font-weight-light text-uppercase">Twoje dane kontaktowe:</h4>
                                <div className="form-row">
                                    <div className="col-12 col-md-3 mb-2">
                                        <input type="text" className="form-control form-control btn-outline-warning"
                                               placeholder="Imię..."/>
                                    </div>
                                    <div className="col-12 col-md-6 mb-2">
                                        <input type="email" className="form-control form-control btn-outline-warning"
                                               placeholder="Adres email..."/>
                                    </div>
                                    <div className="col-12 col-md-3 mb-2">
                                        <input type="tel" className="form-control form-control btn-outline-warning"
                                               placeholder="Numer telefonu..."/>
                                    </div>

                                </div>
                            </form>

                            <form className="order-md-2 mt-3">
                                <h4 className="font-weight-light text-uppercase">Czego szukasz:</h4>
                                <div className="form-row">
                                    <div className="col-12 col-md-3 mb-2">
                                        <input type="text" className="form-control form-control btn-outline-warning"
                                               placeholder="Budżet..."/>
                                    </div>
                                    <div className="col-12 col-md-6 mb-2">
                                        <input type="text" className="form-control form-control btn-outline-warning"
                                               placeholder="Lokalizacja..."/>
                                    </div>
                                    <div className="col-12 col-md-3 mb-2">
                                        <input type="text" className="form-control form-control btn-outline-warning"
                                               placeholder="Powierzchnia w m&sup2;..."/>
                                    </div>

                                </div>
                                <div className="input-group mb-3 mt-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                    <label className="form-control text-left text-secondary list-group-item-warning">Mieszkania
                                        z rynku pierwotnego/deweloperskiego</label>

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                    <label className="form-control text-left text-secondary list-group-item-warning">Mieszkania
                                        z rynku wtórnego</label>
                                </div>

                                <div className=" col-md-4 mx-md-auto mt-5">
                                    <button type="submit" className="btn  btn-block btn-lg btn-warning">Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferForm;