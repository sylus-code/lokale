import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-secondary ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                            <p>
                                <a className="text-warning" href='mailto:szyndler1313@gmail.com'><i
                                    className="fas fa-envelope"/> kontakt@lokalemiszkalne.eu</a>
                                <br/>
                                <a className="text-warning" href='tel:693419740'><i className="fas fa-mobile-alt"/> 693
                                    419 740</a>
                            </p>
                            <p className=" text-light small mb-4 mb-lg-0">&copy;2020 LokaleMieszkalne.eu Powered by
                                Coderaf. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                    <a href="https://facebook.pl" className='text-warning'>
                                        <i className="fab fa-facebook fa-2x fa-fw "/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;