import { call, put, takeEvery } from 'redux-saga/effects';

//Definição da URL utilizando o endpoint users
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//Função para pegar a informação da api
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

//Generator (por isso *)
function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        //Dispatch da action GET_USER_SUCCESS passando o payload users
        yield put({ type: 'GET_USERS_SUCCESS', users: users });
    } catch (e) {
        //Dispatch da action GET_USER_FAILED passando o payload message
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}

//Listener do catchusers request
function* userSaga() {
    //Listening to the action type
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;