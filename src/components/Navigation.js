import React, {Component} from 'react';

class Navigation extends Component{
    render() {
        return (
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <a className="btn btn-primary" href="#">Sign In</a>
                </div>
            </nav>
        );
    }
}

export default Navigation;