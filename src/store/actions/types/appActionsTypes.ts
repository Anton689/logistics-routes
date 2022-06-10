import {
    selectWarehousesRequest,
    selectWarehousesSuccess,
    setIsActiveRequest,
    setIsActiveSuccess,

} from '../appActions';

export type AppActionsTypes =
    setIsActiveSuccessType
    | setIsActiveRequestType
    | selectWarehousesRequestType
    | selectWarehousesSuccessType

export type setIsActiveSuccessType = ReturnType<typeof setIsActiveSuccess>
export type setIsActiveRequestType = ReturnType<typeof setIsActiveRequest>
export type selectWarehousesRequestType = ReturnType<typeof selectWarehousesRequest>
export type selectWarehousesSuccessType = ReturnType<typeof selectWarehousesSuccess>




