import React from 'react';
import {MapContainer} from 'react-leaflet';
import styles from './RoutesMap.module.css';
import './Map.css'
import {MapDisplay} from './mapDisplay';
import {Route} from '../route/Route';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import {useSelector} from 'react-redux';
import {selectFilteredOrders} from '../../store/selectors';
import { LatLngExpression } from 'leaflet';


export const RoutesMap = () => {

    const ZOOM = 5
    const CENTER: LatLngExpression = [57.890632, 34.087372]

    const filteredOrders = useSelector(selectFilteredOrders)

    return (
        <div className={styles.wrapper}>
        <MapContainer center={CENTER} zoom={ZOOM} scrollWheelZoom={true}>
            <MapDisplay/>
            {
                filteredOrders.map(o =>
                    <Route key={o.id} order={o}/> )
            }
        </MapContainer>
        </div>

    );
};
