import {useSelector} from 'react-redux';
import {selectOrders} from '../store/selectors';
import React from 'react';
import {setIsActiveRequest} from '../store/actions';
import {useAppDispatch} from './appDispatch';

type useRowSelectionType = {
    onChange: (selectedRowKeys: React.Key[]) => void
}
export const useRowSelection = ():useRowSelectionType => {
    const orders = useSelector(selectOrders)
    const dispatch = useAppDispatch()

    return {
        onChange: (selectedRowKeys) => {
            orders.forEach(({id, isActive}) => {
                if (selectedRowKeys.includes(id) && !isActive) {
                    return dispatch(setIsActiveRequest(id, true))
                }
                if (!selectedRowKeys.includes(id) && isActive) {
                    return dispatch(setIsActiveRequest(id, false))
                }
            })
        }
    }
}