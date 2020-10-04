import React, {Component} from 'react';
import {Link} from "react-scroll";

class PulseButton extends Component {


    render() {
        return (

            <div className="center mt-5 col-12">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}>
                    <div className="circle pulse hover-zoom">
                        <i className="fas fa-angle-down text-white ml-2 font-weight-light"></i>
                    </div>
                </Link>

            </div>

        );
    }
}

export default PulseButton;