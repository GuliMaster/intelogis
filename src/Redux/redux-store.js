import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import routesReducer from "./reducers/routesReducer";
import { rootWatcher } from "./saga/rootWatcher";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers(
    {
        routes: routesReducer,
    }
);

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export default store;