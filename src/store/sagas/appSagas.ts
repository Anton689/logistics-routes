import {put, PutEffect, spawn, takeEvery} from 'redux-saga/effects'
import {
    SELECT_WAREHOUSES_REQUEST,
    selectWarehousesSuccess,
    SET_IS_ACTIVE_REQUEST,
    setIsActiveSuccess,
} from '../actions';

import {
    selectWarehousesRequestType, selectWarehousesSuccessType,
    setIsActiveRequestType,
    setIsActiveSuccessType
} from '../actions/types';

export function* setIsActive(action: setIsActiveRequestType)
    : Generator<PutEffect<setIsActiveSuccessType>, void, void> {
    yield put(setIsActiveSuccess(action.payload.id, action.payload.value))
}

export function* selectWarehouses(action: selectWarehousesRequestType)
    : Generator<PutEffect<selectWarehousesSuccessType>, void, void> {
    yield put(selectWarehousesSuccess(action.payload.orderId, action.payload.warehouseID, action.payload.manipulation))

}

export function* sagaWatcher() {
    yield takeEvery(SET_IS_ACTIVE_REQUEST, setIsActive)
    yield takeEvery(SELECT_WAREHOUSES_REQUEST, selectWarehouses)
}

export function* rootSaga() {
    yield spawn(sagaWatcher);
}