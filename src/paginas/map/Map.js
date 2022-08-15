import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css';
import mapData from './layers/barrios.json'





function Mapa() {
    const color = ["green", "red", "yellow"];
    const colorIndex = Math.floor(Math.random()* color.length);

    function popup(feature,layer){
        if(feature.properties && feature.properties.COMUNA){
            layer.bindPopup("<strong>COMUNA: </strong>" + feature.properties.COMUNA + "<br/>" + "<strong>NOMBRE: </strong>" + feature.properties.NOMBRE);
            layer.options.fillOpacity = Math.random();
            //layer.options.fillColor = color[colorIndex];
        }
    }
        

    return (
        
        <div className='mapa'>
        <MapContainer center={[6.217,  -75.567 ]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:2}} 
                    data={mapData.features}
                    onEachFeature={popup}
                    />
        </MapContainer>
        
        </div>
    );
}

export default Mapa;
