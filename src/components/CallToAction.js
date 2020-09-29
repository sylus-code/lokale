import React, {Component} from 'react';

class CallToAction extends Component {
    render() {
        const offer = ["Sprzedaż mieszkań deweloperskich bez prowizji", "Sprzedaż mieszkań na rynku wtórnym", "Wynajem mieszkań i lokali użytkowych", "Kredyty hipoteczne na zakup domu i mieszkania"];

        return (
            <section className="call-to-action ">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row ">
                        <div>
                            <p className="text-left"><h1 className="text-uppercase">{offer[0]}</h1></p>
                            <p><h2 className="font-weight-light text-lowercase text-monospace">{offer[1]}</h2></p>
                            <p><h1 className="text-uppercase">{offer[2]}</h1></p>
                            <p className="text-right text-uppercase"><h3 className="text-monospace font-weight-light">{offer[3]}</h3></p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default CallToAction;