import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {/* (1) */}
                <h2>I am from Class Component</h2>

                {/* (2) */}
                {/* class component Props, Reuse of Component With Custom Value */}
                <h2>I am from {this.props.name}</h2>
            </div>
        );
    };
};

export default ClassComponent;