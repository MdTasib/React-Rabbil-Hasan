import React from 'react';
import './App.css';
import { BrowserRouter } from '../node_modules/react-router-dom';
import MyNavigation from './components/MyNavigation';
import MyRoute from './components/MyRoute';

function App() {
  return (
    <div>
      <h1>Ohidul Alam</h1>
      <BrowserRouter>
        <MyNavigation />
        <MyRoute />
      </BrowserRouter>
    </div>
  )
}

export default App;
