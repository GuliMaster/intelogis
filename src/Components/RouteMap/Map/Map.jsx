import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import s from './Map.module.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
        <MapContainer className={s.mapContainer} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;