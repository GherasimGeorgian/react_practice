import authReducer from "./auchReducer";
import projectReducer from "./projectReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";




const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    postR:postReducer,
    firestore:firestoreReducer
})

export default rootReducer 