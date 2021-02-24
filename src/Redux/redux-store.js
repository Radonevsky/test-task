import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import applicationReducer from "./applications-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    applicationsPage: applicationReducer,
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;