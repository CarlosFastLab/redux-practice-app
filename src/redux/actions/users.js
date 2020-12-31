import * as type from '../types';

//Essa função é a action
export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}