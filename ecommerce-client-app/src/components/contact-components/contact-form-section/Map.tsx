import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,} from 'react-leaflet';
import React from 'react';

const map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-[100%] h-[25rem] rounded-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default map;
