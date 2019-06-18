import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker();
