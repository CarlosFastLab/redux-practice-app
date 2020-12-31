import { all } from 'redux-saga/effects';
import userSaga from './userSaga';

//Criando a combinação de sagas. Por enquanto só user, mas poderia adionaar mais
export default function* rootSaga() {
    yield all([
        userSaga(),
    ])
}