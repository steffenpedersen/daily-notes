import authReducer from "./authReducer";
import noteReducer from "./noteReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    auth: authReducer,
    note: noteReducer
})

export default allReducers