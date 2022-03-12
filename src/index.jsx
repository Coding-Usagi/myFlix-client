import React from 'react';
import ReactDOM from 'react-dom';

// Import statement to indicare that you need to bundle './index.scss';
import './index.scss';

// Main componet (will eventually use all the others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className = "my-flix">
                <div> Good morning </div>
            </div>
        );
    }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container') [0];

// Tells React to render your app int he root DOm element
ReactDOM.render(React.createElement(MyFlixApplication), container);
