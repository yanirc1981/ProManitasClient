import {createStore, applyMiddleware } from "redux"; 
import {composeWithDevTools} from "redux-devtools-extension"; 
import thunk from "redux-thunk";
import rootReducer from "../Reducer/homeReducer"; 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


/*import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import  reducer  from  ".. /reducer/index";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;*/ 