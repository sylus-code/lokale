import React, {Component} from 'react';

class AskForMore extends Component{
    render() {
        return (
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                            <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                        </div>
                        <div className="col-12 col-md-3">
                            <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default AskForMore;