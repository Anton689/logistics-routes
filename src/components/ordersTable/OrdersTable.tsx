import React, {ReactElement} from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/lib/table';
import {SelectOrder} from './selectOrder';
import {useSelector} from 'react-redux';
import {selectOrders, selectWarehouse} from '../../store/selectors';
import {Resizable} from 're-resizable';
import {useRowSelection} from '../../hooks';
import {Operations} from '../../enums';

interface DataType {
    key: React.Key
    id: string
    loading: ReactElement
    unloading: ReactElement

}

const columns: ColumnsType<DataType> = [
    {
        key: Operations.Loading,
        title: 'Place of loading',
        dataIndex: Operations.Loading,
    },
    {
        key: Operations.Unloading,
        title: 'Place of unloading',
        dataIndex: Operations.Unloading,

    },
]

export const OrdersTable: React.FC = () => {

    const orders = useSelector(selectOrders)
    const warehouses = useSelector(selectWarehouse)

    const rowSelection = useRowSelection()

    const data: DataType[] = orders.map(order => {
            const unloading = warehouses.find(({id}) => id === order.placeOfUnloading.warehouseID)
            const loading = warehouses.find(({id}) => id === order.placeOfLoading.warehouseID)
            return {
                key: order.id,
                id: order.id,
                loading: (
                    <SelectOrder key={order.id}
                                 manipulation={Operations.Loading}
                                 defaultValue={loading?.address as string}
                                 orderId={order.id}
                    />
                ),
                unloading: (
                    <SelectOrder key={order.id + 1}
                                 manipulation={Operations.Unloading}
                                 defaultValue={unloading?.address as string}
                                 orderId={order.id}
                    />
                ),
            }
        }
    )

    return (
        <>
            <Resizable
                maxWidth="70%"
                minWidth="50px"
                enable={{right: true}}>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{x: 200}}
                />
            </Resizable>
        </>
    );
};




