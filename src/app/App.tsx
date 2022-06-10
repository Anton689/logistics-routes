import React from 'react';
import stylesApp from './App.module.css';
import {OrdersTable, RoutesMap} from '../components';

export function App() {

    return (
        <div className={stylesApp.container}>
            <div className={stylesApp.wrapper}>
                <OrdersTable/>
                <RoutesMap/>
            </div>
        </div>
    );
}



