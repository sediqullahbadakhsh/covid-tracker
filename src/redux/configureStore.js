import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import covidDataReducer from "./covid/covid";

export default createStore(covidDataReducer, applyMiddleware(thunk));
