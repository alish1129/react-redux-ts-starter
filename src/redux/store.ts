import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware: any = [];

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(...middleware))
);

