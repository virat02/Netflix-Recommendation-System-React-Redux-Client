import React, { Component } from 'react';
import Store from './stores/store'
import Routes from './Routes'
import history from './History'
import {Provider} from 'react-redux'
import {Router} from 'react-router'


class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={history}>
                    <Routes/>
                </Router>
            </Provider>
        );
    }
}

export default App;
