import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const FORTALEZA_CENTER: [number, number] = [-3.7172, -38.5433];

const markerIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapUpdater() {
  const map = useMap();
  map.setView(FORTALEZA_CENTER, 13);
  return null;
}

const ContactMap = () => {
  return (
    <div className="contact-map">
      <MapContainer
        center={FORTALEZA_CENTER}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '250px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={FORTALEZA_CENTER} icon={markerIcon}>
          <Popup>Paraísmo Frames - Fortaleza/CE</Popup>
        </Marker>
        <MapUpdater />
      </MapContainer>
    </div>
  );
};

export default ContactMap;