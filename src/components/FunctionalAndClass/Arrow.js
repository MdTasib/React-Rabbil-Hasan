import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AlertMe = (e) => {
    alert('I am arrow function')
}

const Arrow = () => {
    return (
        <div>
            <button onClick={AlertMe.bind(this)} className='btn btn-primary'>Click Here</button>
        </div>
    )
}

export default Arrow;