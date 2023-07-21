import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import s from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

const Map = (props) => {
    const pathOptions = {
        color: '#d40f0f',
        opacity: 0.8,
        weight: 3,
    };

    return (
        <MapContainer className={s.mapContainer} center={[59.84660399, 30.29496392]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                props.coordinates && <>
                    <Polyline pathOptions={pathOptions} positions={props.coordinates} />
                    <RecenterAutomatically coordinates={props.coordinates} />
                </>
            }
            {
                props.waypoints && props.waypoints.map((el, i) =>
                    <Marker key={i} title={`Точка №${i + 1}`} position={[...el.location].reverse()} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} />)
            }
        </MapContainer>
    )
}

const RecenterAutomatically = (props) => {
    const map = useMap();

    useEffect(() => {
        if (props.coordinates.length) map.fitBounds(props.coordinates);
    }, [map, props.coordinates]);

    return null;
}

export default Map;