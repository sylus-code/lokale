import React, {Component} from 'react';


class Content extends Component{
    getnerateContent(contentList){
      let lista = contentList.map((el,index)=> {
           return <li className="list-group-item font-weight-light" key={index}>{el}</li>});

       return lista;
    }
    render() {
        const {messages} = this.props;
        return (

                <ul className="list-group-flush">
                    {this.getnerateContent(messages)}
                </ul>


        );
    }
}

export default Content;