import authReducer from "./authReducer";
import noteReducer from "./noteReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const allReducers = combineReducers({
    auth: authReducer,
    note: noteReducer,
    // Sync the property with data from the database
    firestore: firestoreReducer,
    // Sync the property with Firebase including auth
    firebase: firebaseReducer
})

export default allReducers