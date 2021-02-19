import React from 'react';
import './App.css';
// FunctionalComponent import here
import FunctionalComponent from './components/FunctionalAndClass/FunctionalComponent';
// ClassComponent import here
import ClassComponent from './components/FunctionalAndClass/ClassComponent';


function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
