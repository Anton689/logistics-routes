import {RootStateType} from '../store';

export const selectOrders = (state: RootStateType) => state.app.orders
export const selectWarehouse = (state: RootStateType) => state.app.warehouses

export const selectFilteredOrders = (state: RootStateType) =>
    state.app.orders.filter(({isActive}) => isActive)

