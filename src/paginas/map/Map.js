import {React , useContext, useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css';
import { icon } from 'leaflet';
import mark from './../../images/gps.png'
import { hoodsContext } from '../../context/barriosContext';
import { mapMarkersContext } from '../../context/mapMarkersContext';

function Mapa() {

    const {hoods,setHoods} = useContext(hoodsContext)
    const {showMarker} = useContext(mapMarkersContext)

    const [places, setPlaces] = useState([]);
    const [positions, setPositions] = useState([]);

    async function fetchMapData(){
        const response = await fetch('http://34.66.206.26:8000/barrios/',
        {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        setPlaces(data.body)
        setHoods(data)
    }

    async function fetchHurtoPositions(){
        const response = await fetch('http://34.66.206.26:8000/hurtos/positions',
        {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
        setPositions(data);
    }

    useEffect(()=>{
        fetchMapData();
        fetchHurtoPositions();
        mapPainting();
    },[])

    const mapPainting = () =>{
        if(places.length > 0){
            return(
                places.map( (place) =>{
                    return (
                        <GeoJSON 
                        style={{fillColor: place.properties.SEC_LEVEL || 'green',
                        fillOpacity:0.4, 
                        color:"black",
                        weight:1}} 
                        data={place}
                        onEachFeature={popup}
                        key={place.properties.OBJECTID}
                        />  
                    );          
                })
            );
        }else{
            return;
        }
    }

    function popup(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
            layer.bindPopup(feature.properties.NOMBRE);
        }
    }
    
    function mapMarkers(dummiesMarkers){
        let myIcon = icon({
            iconUrl: mark,
            iconSize: [40, 40],
            iconAnchor: [42, 110],
            popupAnchor: [-3, -76],
            shadowUrl: mark,
            shadowSize: [40, 40],
            shadowAnchor: [42, 110]
        });
        if(positions.length === 0){
            return;
        }else{
            return(
                dummiesMarkers.map(marker=>{
                    if(marker.latitud == 'NaN'){
                        return;
                    }else{
                        return(
                            <Marker position={[marker.latitud,marker.longitud]} icon={myIcon}/>
                        );
                    }
                })
            );
        }
    }

    return (
        <div className='mapa'>
            <MapContainer center={[6.248304638021831, -75.59969720590291]} zoom={13} scrollWheelZoom={true}>
                {showMarker?mapMarkers(positions):<></>}    
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
