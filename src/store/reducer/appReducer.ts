import {OrdersType, WarehouseType} from '../../types';
import {AppActionsTypes} from '../actions/types';
import {SELECT_WAREHOUSES_SUCCESS, SET_IS_ACTIVE_SUCCESS,} from '../actions';
import {Operations} from '../../enums';


export type InitialStateType = {
    orders: OrdersType[]
    warehouses:  WarehouseType[]
}

export const warehouses = [
    {address: 'Санкт-Петербург, Бадаевский пр-д', coordinates: [59.807531, 30.397418], id: '01'},
    {address: 'Тверь, Улица Мира', coordinates: [56.889304, 35.767660], id: '02'},
    {address: 'Москва, Манежная улица', coordinates: [55.753709, 37.613054], id: '03'}
]

const initialState: InitialStateType = {
    warehouses: warehouses,
    orders: [
        {
            id: '1',
            isActive: false,
            placeOfLoading: {
                warehouseID: '01'
            },
            placeOfUnloading: {
                warehouseID: '02'
            }
        },
        {
            id: '2',
            isActive: false,
            placeOfLoading: {
                warehouseID: '02'
            },
            placeOfUnloading: {
                warehouseID: '03'
            }
        },
        {
            id: '3',
            isActive: false,
            placeOfLoading: {
                warehouseID: '03'
            },
            placeOfUnloading: {
                warehouseID: '01'
            }
        },
    ],
}

export const appReducer = (state = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {

        case SET_IS_ACTIVE_SUCCESS: {
            return {
                ...state, orders: state.orders.map(o =>
                    o.id === action.payload.id ? {...o, isActive: action.payload.value} : o)
            }
        }
        case SELECT_WAREHOUSES_SUCCESS: {
            return {
                ...state, orders: state.orders.map((order) => {
                    if (order.id === action.payload.orderId) {
                        action.payload.manipulation === Operations.Loading
                            ? order.placeOfLoading.warehouseID = action.payload.warehouseID
                            : order.placeOfUnloading.warehouseID = action.payload.warehouseID
                    }
                    return order
                })
            }
        }
        default :
            return state
    }
}

