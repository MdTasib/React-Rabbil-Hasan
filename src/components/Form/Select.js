import React, { Component } from 'react';

export default class Select extends Component {
    constructor() {
        super();
        this.state = {
            city1: 'Chattigong',
            city2: 'Dhaka',
            city3: 'Bhorisal',
            city4: 'Rongpur',
            auto: 'Chattigong',
            show: ''
        }
    }


    onChangeHandler = (event) => {
        let selectValue = event.target.value;
        this.setState({ show: selectValue, auto: selectValue })
    }


    render() {
        return (
            <div>
                <p>select city is : {this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        )
    }
}