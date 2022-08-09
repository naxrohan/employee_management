import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import UserApp from './components/UserApp';
import DeptApp from './components/DeptApp';
import LocatApp from './components/LocatApp';


if (document.getElementById('empMng')) {
    ReactDOM.render(<App />, document.getElementById('empMng'));
}

if (document.getElementById('userMng')) {
    ReactDOM.render(<UserApp />, document.getElementById('userMng'));
}

if (document.getElementById('deptMng')) {
    ReactDOM.render(<DeptApp />, document.getElementById('deptMng'));
}

if (document.getElementById('countryMng')) {
    ReactDOM.render(<LocatApp />, document.getElementById('countryMng'));
}
