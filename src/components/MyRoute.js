import React, { Component } from 'react';
import { Route, Router } from '../../node_modules/react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Protfolio from './pages/Protfolio';
import Contact from './pages/Contact';

export default class MyRoute extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/protfolio' component={Protfolio}></Route>
                <Route path='/contact' component={Contact}></Route>
            </div>
        )
    }
}
