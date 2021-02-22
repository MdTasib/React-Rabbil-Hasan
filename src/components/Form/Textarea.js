import React, { Component } from 'react';

export default class Textarea extends Component {

    constructor() {
        super();
        this.state = {
            description: ``,
            userText: '',
        }
    }

    textAreaHandler = (event) => {
        const text = event.target.value;
        this.setState({ userText: text })
    }

    render() {
        return (
            <div>
                <textarea onChange={this.textAreaHandler} placeholder='Your Text Here'></textarea>
                <p>{this.state.userText}</p>
            </div>
        )
    }
}