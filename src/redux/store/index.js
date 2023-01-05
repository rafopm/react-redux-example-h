import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducer/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)));

store.subscribe(() => console.log(store, store.getState()));

export default store;