import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import MovieView from './components/movie-view/movie-view';

// Import statement to indicare that you need to bundle './index.scss';
import './index.scss';

// Main componet (will eventually use all the others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <MainView />
        );
    }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container') [0];

// Tells React to render your app int he root DOm element
ReactDOM.render(React.createElement(MyFlixApplication), container);