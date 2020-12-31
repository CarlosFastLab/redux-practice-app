import { createStore, applyMiddleware, compose } from 'redux'; //Import do createStore
import rootReducer from './reducers/index.js'; //Reducer de todos os states (entidades/componentes)
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

//Definição do MiddleWare
const sagaMiddleware = createSagaMiddleware();

//Criação da store usando os reducers do rootReducers
//É uma coleção dos reducers combinadas
const store = compose(
    applyMiddleware(sagaMiddleware),
)
(createStore)(rootReducer);

sagaMiddleware.run(rootSaga)

export default store;