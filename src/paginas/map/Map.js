import {React , useContext, useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css';
import { icon } from 'leaflet';
import mark from './../../images/gps.png'
import { hoodsContext } from '../../context/barriosContext';





function Mapa() {

    const colorAssignation = (value) => {
        let num = parseInt(value);
        if(num>=7){
            return 'green';
        }else if(num>=3){
            return 'yellow';
        }else{
            return 'red';
        }
    }

    const {hoods,setHoods} = useContext(hoodsContext)

    const dummiesMarkers = [[6.219002240823769, -75.59803733167],[6.249403142357898, -75.60336646786811],[6.2282431969064165, -75.60266909358012],[6.195563058229299, -75.54683623066008],[6.221026754633193, -75.57424628809825]]

    const [places, setPlaces] = useState([]);

    async function fetchMapData(){
        const response = await fetch('http://localhost:3500/api/v1/barrios/barriosNew',
        {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        setPlaces(data)
        setHoods(data)
    }

    useEffect(()=>{
        fetchMapData();
        mapPainting();
    },[])

    const mapPainting = () =>{
        return(
            places.map( (place) =>{
                return (
                    <GeoJSON 
                    style={{fillColor: colorAssignation(place.properties.LIMITECOMUNACORREGIMIENTOID),
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
    }

    function popup(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
            layer.bindPopup(feature.properties.NOMBRE);
        }
    }
    
    function mapDummieMarkers(dummiesMarkers){
        let myIcon = icon({
            iconUrl: mark,
            iconSize: [70, 70],
            iconAnchor: [42, 110],
            popupAnchor: [-3, -76],
            shadowUrl: mark,
            shadowSize: [70, 70],
            shadowAnchor: [42, 110]
        });
        return(
            dummiesMarkers.map(marker=>{
                return(
                    <Marker position={marker} icon={myIcon}/>
                );
            })
        );
    }
        

    return (
        <div className='mapa'>
            <h1 className='mapTittle'>SafeZone Map!</h1>
            <MapContainer center={[6.248304638021831, -75.59969720590291]} zoom={13} scrollWheelZoom={true}>
                {mapDummieMarkers(dummiesMarkers)}    
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
