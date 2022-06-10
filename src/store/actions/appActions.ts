import {ManipulationsType} from '../../types';

export const SET_IS_ACTIVE_SUCCESS = 'App/SET_IS_ACTIVE_SUCCESS'
export const SET_IS_ACTIVE_REQUEST = 'App/SET_IS_ACTIVE_REQUEST'
export const SELECT_WAREHOUSES_REQUEST = 'App/SELECT_WAREHOUSES_REQUEST'
export const SELECT_WAREHOUSES_SUCCESS = 'App/SELECT_WAREHOUSES_SUCCESS'

export const setIsActiveRequest = (id: string, value: boolean) => ({
    type: SET_IS_ACTIVE_REQUEST,
    payload: {
        id,
        value

    }
} as const)

export const setIsActiveSuccess = (id: string, value: boolean) => ({
    type: SET_IS_ACTIVE_SUCCESS,
    payload: {
        id,
        value

    }
} as const)

export const selectWarehousesRequest = (orderId: string,warehouseID: string, manipulation: ManipulationsType) => ({
    type: SELECT_WAREHOUSES_REQUEST,
    payload: {
        orderId,
        warehouseID,
        manipulation

    }
} as const)

export const  selectWarehousesSuccess = (orderId: string,warehouseID: string, manipulation: ManipulationsType) => ({
    type: SELECT_WAREHOUSES_SUCCESS,
    payload: {
        orderId,
        warehouseID,
        manipulation

    }
} as const)






