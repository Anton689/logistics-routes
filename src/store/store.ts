import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {appReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';


const rootReducer = combineReducers({
    app: appReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof rootReducer>
