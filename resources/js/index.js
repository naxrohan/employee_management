import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';


if (document.getElementById('userMng')) {
    ReactDOM.render(<App />, document.getElementById('userMng'));
}
