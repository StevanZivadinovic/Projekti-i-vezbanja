import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux'//ovo kombinuje reducere i spaja ih u jedan

let rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;