import {Select} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectWarehouse} from '../../../store/selectors';
import {useAppDispatch} from '../../../hooks';
import {selectWarehousesRequest} from '../../../store/actions';
import {ManipulationsType} from '../../../types';

const {Option} = Select

type SelectOrderType = {
    manipulation: ManipulationsType
    defaultValue: string
    orderId: string

}

export const SelectOrder = ({
                                manipulation,
                                defaultValue,
                                orderId
                            }: SelectOrderType) => {

    const dispatch = useAppDispatch()

    const warehouses = useSelector(selectWarehouse)

    const handleChange = (value: string) => {
        dispatch(selectWarehousesRequest(orderId, value, manipulation))
    };

    const selectedWarehouse = warehouses.map(({
                                                  address,
                                                  id,
                                              }) => {
        return <Option key={id} value={id}>
            {address}
        </Option>
    })

    return (
        <Select defaultValue={defaultValue}
                style={{width: 250}}
                bordered={false}
                onChange={handleChange}
        >
            {selectedWarehouse}
        </Select>
    )
}