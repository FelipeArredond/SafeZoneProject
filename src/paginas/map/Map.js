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
    const [dangerrousnes, setDangerousnes] = useState([])

    async function fetchMapData(){
        const response = await fetch('http://localhost:3500/barrios/',
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
        const response = await fetch('http://localhost:3500/hurtos/positions',
        {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
        setPositions(data);
    }

    async function fetchHurtosPerHood(){
        const response = await fetch('http://localhost:3500/hurtos/hurtosPerHood',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setDangerousnes(calculate(data))
    }

    function calculate(data){
        let dangerZones = {}
        let cont = 0;
        for(let i = 0; i < data.length; i += 1){
            if(dangerZones[data[i]] === undefined){
                dangerZones[data[i]] = 1;
            }else{
                dangerZones[data[i]] += 1; 
            }
            cont += 1
        }
        return dangerZones
    }

    useEffect(()=>{
        fetchMapData();
        fetchHurtoPositions();
        fetchHurtosPerHood();
        mapPainting();
    },[])

    function colorAssignation(val){
        if(val < (findMaxScore()*0.05)){
            return 'green';
        }else if((findMaxScore()*0.2) < val < (findMaxScore()*0.5)){
            return 'yellow';
        }else{
            return 'red';
        }
    }

    function setLevelSecurityToPlaces(){
        let dangerObjects = Object.keys(dangerrousnes)
        for(let i = 0; i < places.length; i += 1){
            for(let j = 0; j < dangerObjects.length; j += 1){
                if(places[i].properties.CODIGO === dangerObjects[j]){
                    places[i].properties['SEC_LEVEL'] = colorAssignation(dangerrousnes[dangerObjects[j]])
                }
            }
        }
    }

    const mapPainting = () =>{
        if(places.length > 0 && dangerrousnes !== null){
            return(
                places.map( (place) =>{
                    return (
                        <GeoJSON 
                        style={{fillColor: place.properties.SEC_LEVEL,
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
     
    function findMaxScore(){
        let arr = Object.values(dangerrousnes)
        return Math.max.apply(null,arr)
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
                {findMaxScore()}
                {dangerrousnes !== []?setLevelSecurityToPlaces():null}
            </MapContainer>
        </div>
    );
}

export default Mapa;
