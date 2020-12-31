//A entidade users entra no folder reducers também
//Serve quase como um model que recebe os states
import * as type from '../types'

//Recebe um array vazio porque não vai passar nad apor enquanto
const initialState = {
    users: [],
    loading: false,
    error: null
};

//Função que define a store baseado em um switch statement
export default function users(state = initialState, action) {
    switch (action.type) {
        case type.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case type.GET_USERS_FAILED:
            return{
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}