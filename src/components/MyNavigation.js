import React, { Component } from 'react'
import { Link } from '../../node_modules/react-router-dom';


export default class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/protfolio'>Protfolio</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}
