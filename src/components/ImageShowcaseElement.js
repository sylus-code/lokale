import React, {Component} from 'react';
import Content from "./Content";

class ImageShowcaseElement extends Component{


    render() {
        let {pic, even, message, heading} = this.props;
        let addPic = pic;
        let isEven = "";
        let isOdd ="";
        console.log(message);

        if(even === "true"){
            isEven ="order-lg-1";
            isOdd ="order-lg-2";
        }else {
            isEven = "order-lg-2";
            isOdd = "order-lg-1";
        }

        return (
            <div className="row no-gutters">
                <div className={"col-lg-6 "+isEven+" text-white showcase-img "+addPic}></div>

                <div className={"col-lg-6 "+isOdd+" my-auto showcase-text"}>
                    <h2>{heading}</h2>
                    <Content messages={message}/>

                </div>
            </div>
        );
    }
}
export default ImageShowcaseElement;