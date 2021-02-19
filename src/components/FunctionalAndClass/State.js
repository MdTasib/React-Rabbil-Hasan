import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class StateUse extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Ohidul Alam'
        }
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>My name is {name}</h1>
            </div>
        )
    }
}
