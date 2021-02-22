import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            userName: ''
        }
    }


    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })
    }


    onSubmitHandler = () => {
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My first form</p>
                    <p>{this.state.userName}</p>
                    <input onChange={this.onChangeHandler} name='userName' type='text' placeholder='Your Name' /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}