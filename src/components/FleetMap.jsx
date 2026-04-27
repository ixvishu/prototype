import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with bundlers like Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FleetMap = () => {
  // Center map on India
  const position = [22.9734, 78.6569];

  // Mock shipments
  const markers = [
    { id: 'RLX-001002', status: 'In Transit', coords: [28.6139, 77.2090], name: 'Delhi' },
    { id: 'RLX-001005', status: 'Delivered', coords: [19.0760, 72.8777], name: 'Mumbai' },
    { id: 'RLX-001008', status: 'Pending', coords: [12.9716, 77.5946], name: 'Bengaluru' },
    { id: 'RLX-001012', status: 'Delayed', coords: [13.0827, 80.2707], name: 'Chennai' },
  ];

  // Example route: Delhi to Mumbai
  const routeCoords = [
    [28.6139, 77.2090], // Delhi
    [19.0760, 72.8777], // Mumbai
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 z-0">
      <MapContainer 
        center={position} 
        zoom={5} 
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.coords}>
            <Popup>
              <div className="font-medium text-slate-800">
                <strong>{marker.name}</strong><br />
                {marker.id} - {marker.status}
              </div>
            </Popup>
          </Marker>
        ))}

        <Polyline 
          positions={routeCoords} 
          pathOptions={{ color: '#3b82f6', weight: 4, opacity: 0.8, dashArray: '8 8' }} 
        />
      </MapContainer>
    </div>
  );
};

export default FleetMap;
