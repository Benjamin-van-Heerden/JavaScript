import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer, authReducer
})

export default allReducers;