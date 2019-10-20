import authReducer from "./authReducer";
import noteReducer from "./noteReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const allReducers = combineReducers({
    auth: authReducer,
    note: noteReducer,
    // Sync the property with data from the database
    firestore: firestoreReducer
})

export default allReducers