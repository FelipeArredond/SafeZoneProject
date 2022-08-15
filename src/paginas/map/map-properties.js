/* let map = L.map('map').setView([6.217,-75.567],12.3)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

// Agregar escala
new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.COMUNA){
        layer.bindPopup("<strong>COMUNA: </strong>" + feature.properties.COMUNA + "<br/>" + "<strong>NOMBRE: </strong>" + feature.properties.NOMBRE);
    }
}



// Agregar capa en formato GeoJson
L.geoJson(barrios).addTo(map);

var barriosJS = L.geoJson(barrios,{
    onEachFeature: popup
}).addTo(map);


 */