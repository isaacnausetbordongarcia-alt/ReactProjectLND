import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


//Funcion para forzar la altura del mapa
function FixMapResize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

const Mapa = () => {
  const center = [28.1235, -15.4363];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap'/>
      <Marker position={center}>
        <Popup>Las Palmas de Gran Canaria</Popup>
      </Marker>
      <FixMapResize /> 
    </MapContainer>
  );
};

export default Mapa;
