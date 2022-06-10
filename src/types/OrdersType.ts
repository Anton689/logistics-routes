import {Operations} from '../enums';

export type OrdersType = {
    id: string
    isActive: boolean
    placeOfLoading: WarehousesType
    placeOfUnloading: WarehousesType
}

export type WarehousesType = {
    warehouseID: string
}

export type WarehouseType = {
    address: string
    coordinates: number[]
    id: string
}

export type CoordinatesType = number[]

export type ManipulationsType = Operations.Loading | Operations.Unloading

