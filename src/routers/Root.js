import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import appStore from '../store/index.js';
import App from '../app/app'



ReactDOM.render(
<Provider store={appStore}>
<App />
</Provider>, document.getElementById('root'))
