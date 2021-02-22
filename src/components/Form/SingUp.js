import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Singup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: ''
        }
    }

    onChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({ [inputName]: inputValue })

        if (inputName === 'firstName') {
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({ firstName: 'First Name Is Not Valid' });
            }
        }
        if (inputName === 'lastName') {
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({ lastName: 'Last Name Is Not Valid' });
            }
        }
        if (inputName === 'email') {
            var emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.test(inputValue)) {
                this.setState({ email: 'Email Is Not Valid' });
            }
        }
        if (inputName === 'mobile') {
            if (!Number(inputValue)) {
                this.setState({ mobile: 'Number Is Not Valid' });
            }
        }
    }


    render() {
        return (
            <div>
                <p>First Name : {this.state.firstName}</p>
                <p>Last Name : {this.state.lastName}</p>
                <p>Email : {this.state.email}</p>
                <p>Mobile No : {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} type='text' name='firstName' placeholder='Your First Name'></input><br />
                    <input onChange={this.onChangeHandler} type='text' name='lastName' placeholder='Your Last Name'></input><br />
                    <input onChange={this.onChangeHandler} type='text' name='email' placeholder='Your Email'></input><br />
                    <input onChange={this.onChangeHandler} type='text' name='mobile' placeholder='Your Mobile Number'></input><br />
                    <input type='submit' name='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}