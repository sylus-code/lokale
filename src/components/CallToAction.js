import React, {Component} from 'react';

class CallToAction extends Component {
    render() {
        const offer = ["Sprzedaż mieszkań", "Sprzedaż mieszkań na rynku wtórnym", "Wynajem mieszkań i lokali użytkowych", "rynek pierwotny i wtórny", "Sprzedaż mieszkań na rynku wtórnym", "Kredyty hipoteczne na zakup domu i mieszkania"];

        return (
            <section className="call-to-action">
                <div className="container">
                    <div className="row ">
                        <div className='col-12'>
                            <p className="text-left text-uppercase px-auto">{offer[3]}</p>
                            <h1 className="text-secondary text-uppercase pl-2 pb-3 ">{offer[0]}</h1>
                            <p className="text-right text-uppercase px-auto">{offer[2]}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CallToAction;