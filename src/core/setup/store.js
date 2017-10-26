import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {createLogicMiddleware} from 'redux-logic'
import {history} from "./history";
import {reducers} from "./reducers";
import {rootLogic} from "./logic";


const initialState = {};
const enhancers = [];

function getMiddleware() {
    let middleware = [
        routerMiddleware(history),
        createLogicMiddleware(rootLogic, {})
    ];

    return middleware;
}

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV === 'development' ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        compose;

const middleware = composeEnhancers(
    applyMiddleware(...getMiddleware()),
    ...enhancers
);

export const store = createStore(
    reducers,
    initialState,
    middleware
);