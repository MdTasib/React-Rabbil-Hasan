import React, { Component } from 'react';
import axios from 'axios';

export default class HttpRequestGet extends Component {


    constructor() {
        super();
        this.state = {
            allCountry: []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ allCountry: response.data });
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    render() {

        const countryAll = this.state.allCountry;
        const CountryName = countryAll.map(country => {
            return <li>{country.name}</li>
        })


        return (
            <div>
                {CountryName}
            </div>
        )
    }
}