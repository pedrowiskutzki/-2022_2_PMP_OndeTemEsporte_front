      import React, { useEffect, useState } from 'react';
      import {MapContainer,TileLayer, Polygon, Marker, Popup} from 'react-leaflet';
      // import "leaflet-control-geocoder/dist/Control.Geocoder.css";
      // import "leaflet-control-geocoder/dist/Control.Geocoder.js";
      import centroEsportivoService from "../../Services/request/centroEsportivoService";
      import 'leaflet/dist/leaflet.css';
      import L from "leaflet";
      import { Container } from './styled';
      // import LeafletGeocoder from './LeafletGeocoder';
      // import LeafletRoutingMachine from "./LeafletRoutingMachine";
      
      
      const center = [-22.466263167853207, -43.174833747897];
      
      export default function Map() {
      
        useEffect(() => {
        centroEsportivoService
          .getAll(60)
          .then((res) => {
            setcentroEsportivo(res.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

        const [centroEsportivo, setcentroEsportivo] = useState([]);
        
        return (
          <MapContainer
            center={center}
            scrollWheelZoom={false}
            zoom={12}
            style={{ width: '100vw', height: '80vh' }}
          >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centroEsportivo.length === 0 ? (
            <p></p>
          ) : (
            centroEsportivo.map((centroEsportivo) => (
          <Marker position={[centroEsportivo.latitude ,centroEsportivo.longitude]}>
              <Popup>
              <h3>{[centroEsportivo.nome]}</h3>
              <h4>{`Bairro: ${[centroEsportivo.bairro]}`}</h4>
              <h4>{`Rua: ${[centroEsportivo.rua]}`}</h4>
              </Popup>
            </Marker>
             ))
             )}
            
            {/* <LeafletGeocoder/> */}
            {/* <LeafletRoutingMachine/> */}
          </MapContainer>
        );
      }
      let DefaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [20, 31],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
