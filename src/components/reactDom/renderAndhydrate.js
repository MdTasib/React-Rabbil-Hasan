import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class renderAndHydrate extends Component {

    change() {
        let container = document.getElementById('title');
        let element = <h2>I am 19 years old</h2>
        let callback = function () {
            alert('callback function is optional');
        }


        // ReactDOM.render(element, container, callback);
        ReactDOM.hydrate(element, container, callback);
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>change</button>
                <h2 id='title'>My name is Tasib</h2>
            </div>
        )
    }
}

export default renderAndHydrate;