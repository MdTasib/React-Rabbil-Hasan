import React from 'react';

function FunctionalComponent(props) {
    return (
        <div>
            {/* (1) */}
            <h2>I am from Functional Component</h2>

            {/* (2) */}
            {/* functional component Props, Reuse of Component With Custom Value */}
            <h1>My name is {props.name} and i'm {props.age} years old</h1>
        </div>
    )
};

export default FunctionalComponent;