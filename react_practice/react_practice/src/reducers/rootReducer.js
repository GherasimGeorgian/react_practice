import authReducer from "./auchReducer";
import projectReducer from "./projectReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";





const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    postR:postReducer
})

export default rootReducer 