import { createStore } from "redux";
import rootReducers from "../reducer/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools());

store.subscribe(() => console.log(store, store.getState()));

export default store;