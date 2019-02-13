import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotoFormReducers from './PhotoFormReducers';

export default combineReducers({
   auth: AuthReducer,
   photoForm: PhotoFormReducers
});