import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Dashboard from './components/dashboard';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Router>
    </Provider>

    , document.getElementById('root'));

