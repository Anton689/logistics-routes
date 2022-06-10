import {useEffect} from 'react';
import {useMap} from 'react-leaflet';
import L, {LatLngExpression} from 'leaflet';
import 'leaflet-routing-machine';
import {OrdersType} from '../../types';
import {useSelector} from 'react-redux';
import {selectWarehouse} from '../../store/selectors';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.8.0/dist/images/'

type RouteType = {
    order: OrdersType
}

export const Route = ({order}: RouteType) => {

    const LOADING_INDEX = 0
    const UNLOADING_INDEX = 1

    const warehouses = useSelector(selectWarehouse)

    const map = useMap()

    const unloading = warehouses.find((warehouse) => warehouse.id === order.placeOfUnloading.warehouseID)
    const loading = warehouses.find((warehouse) => warehouse.id === order.placeOfLoading.warehouseID)

    useEffect(() => {
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(loading?.coordinates as LatLngExpression),
                L.latLng(unloading?.coordinates as LatLngExpression),
            ],
            // @ts-ignore
            draggableWaypoints: false,
            createMarker: function(waypointIndex: number, waypoint: any,) {
                if(waypointIndex === LOADING_INDEX){
                    return L.marker(waypoint.latLng)
                        .bindPopup(`Place of loading </br> ${loading?.address}`)
                }
                if(waypointIndex === UNLOADING_INDEX){
                    return L.marker(waypoint.latLng)
                        .bindPopup(`Place of unloading </br> ${unloading?.address}`)
                }
            },
        }).addTo(map)

        return () => {
            map.removeControl(routingControl)
        };
    }, [unloading, loading])

    return null

};