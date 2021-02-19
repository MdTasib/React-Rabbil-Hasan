// // functional component (1)
// import React from 'react';

// function ClickEvent() {

//     function clickBtn() {
//         alert('Functional Button Clicked');
//     }

//     return (
//         <div>
//             <button onClick={clickBtn}>Functional Button</button>
//         </div>
//     )
// }

// export default ClickEvent;

// class component (2)
import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ClickEventClass extends Component {

    clickBtn() {
        alert('Class Button Clicked');
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary m-5" onClick={this.clickBtn}>Class Button</button>
            </div>
        )
    }
}
export default ClickEventClass;