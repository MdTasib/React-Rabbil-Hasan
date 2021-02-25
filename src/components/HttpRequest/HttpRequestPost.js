import React, { Component } from 'react';


export default class HttpRequestPost extends Component {


    onClickHandler = () => {
        console.log('click')
    }

    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        )
    }
}