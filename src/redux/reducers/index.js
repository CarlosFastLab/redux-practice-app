import { combineReducers } from 'redux';
import users from './users'

//Atribuição da combinação dos reducers ao rootReducer
const rootReducer = combineReducers({
    //Adição do reducer users ao combineReducers
    users: users,
});

export default rootReducer;