import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import ReactDOM from 'react-dom';
import './main.css';
class App extends Component {
    render() {
        return (
            <div>Do Sth</div>
        );
    }
}
const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};
render();
