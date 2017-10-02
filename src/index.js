import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/index';


import ClientesContainer from './components/views/Clientes/ClientesContainer';

const history = createBrowserHistory()
const rootElement = document.getElementById('root');

let store = createStore(appReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route component={ClientesContainer}/>
            </Switch>
        </Router>
    </Provider>
    , rootElement);
registerServiceWorker();
