import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import store from "./rootStore";
import {Provider} from "react-redux";

const rootEl = document.getElementById('root');

render(
    <Provider store = {store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
