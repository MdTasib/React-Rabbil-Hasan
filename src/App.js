import React from 'react';
import './App.css';
// FunctionalComponent import here
// import FunctionalComponent from './components/FunctionalAndClass/FunctionalComponent';
// ClassComponent import here
// import ClassComponent from './components/FunctionalAndClass/ClassComponent';
// ClickEvent import here
// import ClickEvent from './components/FunctionalAndClass/ClickEvent';
// Arrow function import
// import Arrow from './components/FunctionalAndClass/Arrow';
// StateUse file import here
import State from './components/FunctionalAndClass/State';


function App() {
  // retrun Functional and Class component
  // return (
  //   <div className="App">
  //     {/* (1) */}
  //     {/* <FunctionalComponent /> */}

  //     {/* (2) */}
  //     {/*functional component Props, Reuse of Component With Custom Value */}
  //     <FunctionalComponent name="Tasib" age="19" />
  //     <FunctionalComponent name="Rafi" age="21" />
  //     <FunctionalComponent name="Rakib" age="18" />

  //     {/* (1) */}
  //     {/* <ClassComponent /> */}

  //     {/* (2) */}
  //     {/* class component Props, Reuse of Component With Custom Value */}
  //     <ClassComponent name="Class One" />
  //     <ClassComponent name="Class Two" />
  //   </div>
  // );

  // return Click Event
  // return (
  //   <div>
  //     <ClickEvent />
  //   </div>
  // )

  // Arrow function
  // return (
  //   <div>
  //     <Arrow />
  //   </div>
  // )

  return (
    <div>
      <State />
    </div>
  )
}

export default App;
