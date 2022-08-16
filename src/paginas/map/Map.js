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
            layer.bindPopup("<strong>COMUNA: </strong>" + feature.properties.COMUNA + "<br/>" + "<strong>NOMBRE: </strong>" + feature.properties.NOMBRE + "<br/>" + "<strong>NIVEL DE SEGURIDAD: </strong>");
            layer.options.fillOpacity = Math.random();
            //layer.options.fillColor = color[colorIndex];
        }
    }
        

    return (
        
        <div className='mapa'>
        {console.log(mapData.features)}
        <MapContainer center={[6.217,  -75.567 ]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[0]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[1]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[2]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "green", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[3]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[4]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[5]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[6]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[7]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[8]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[9]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "green", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[10]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[11]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "green", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[12]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[13]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[14]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[15]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "green", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[16]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "red", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[17]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[18]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[19]}
                    onEachFeature={popup}
                    />
                    <GeoJSON 
                    style={{fillColor: "yellow", fillOpacity:0.4, color:"black", weight:1}} 
                    data={mapData.features[20]}
                    onEachFeature={popup}
                    />
        </MapContainer>
        
        </div>
    );
}

export default Mapa;
