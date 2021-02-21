import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class findDOMNode extends Component {

    change() {
        let element = document.getElementById('img');
        ReactDOM.findDOMNode(element).src = 'https://cdn.pixabay.com/photo/2016/02/23/17/28/mango-1218129_960_720.png';
    }
    render() {
        return (
            <div>
                <button onClick={this.change}>change</button><br />
                <img id='img' src='https://media.istockphoto.com/photos/mango-picture-id467328250?s=612x612'></img>
            </div>
        )
    }
}