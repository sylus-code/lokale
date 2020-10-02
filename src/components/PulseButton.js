import React,{Component} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
class PulseButton extends Component {
    render() {
        return (

            <div className="center mt-5">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}>
                    <div className="circle pulse hover-zoom">
                        <i className="fas fa-angle-down fa-3x text-white font-weight-light"></i>
                    </div>
                </Link>

            </div>

        );
    }
}

export default PulseButton;