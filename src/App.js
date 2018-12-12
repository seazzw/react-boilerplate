// import './utils/normalize';

import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import ReactDOM from 'react-dom';
import './app.scss';
class App extends Component {
    render() {
        return (
            <div>hello react</div>
        );
    }
}
const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};
render();
