import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Protfolio from './pages/Protfolio';
import Contact from './pages/Contact';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';


const myRouter = (
  < Router >

    <div>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/protfolio'>Protfolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <Route exact path='/' component={App}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/protfolio' component={Protfolio}></Route>
      <Route path='/contact' component={Contact}></Route>

    </div>

  </Router >
)


ReactDOM.render(
  myRouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
