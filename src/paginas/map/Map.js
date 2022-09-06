import {React , useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css';
import mapData from './layers/barrios.json'





function Mapa() {

    const colorAssignation = (value) => {
        let num = parseInt(value);
        if(num <= 3){
            return 'green';
        }else if(num >= 4 && num <= 6){
            return 'yellow';
        }else{
            return 'red'
        }
    }

    const [places, setPlaces] = useState([]);

    async function fetchMapData(){
        const response = await fetch('http://localhost:3500/api/v1/barrios',
        {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        setPlaces(data)
    }

    useEffect(()=>{
        fetchMapData();
        mapPainting();
    },[])

    const mapPainting = () =>{
        return(
            mapData.features.map( (place) =>{
                console.log(place.properties.SECURITYLEVEL)
                return (
                    <GeoJSON 
                    style={{fillColor: colorAssignation(place.properties.SECTOR), fillOpacity:0.4, color:"black", weight:1}} 
                    data={place}
                    onEachFeature={popup}
                    key={place.properties.OBJECTID}
                    />  
                );          
            })
        );
    }

    function popup(feature,layer){
        if(feature.properties && feature.properties.COMUNA){
            layer.bindPopup("<strong>COMUNA: </strong>" + feature.properties.COMUNA + "<br/>" + "<strong>NOMBRE: </strong>" + feature.properties.NOMBRE + "<br/>" + "<strong>NIVEL DE SEGURIDAD: </strong>" + feature.properties.SECURITYLEVEL);
        }
    }
        

    return (
        
        <div className='mapa'>
        <MapContainer center={[6.217,  -75.567 ]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapPainting()}
        </MapContainer>
        
        </div>
    );
}

export default Mapa;
