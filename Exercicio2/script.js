/*2) Na mesma div chamada Map, ao invés de escrever a coordenada do usuário, utilize
a api do Google Maps para plotar o ponto no mapa
(https://developers.google.com/maps/documentation/javascript/geolocation)
referência */

window.onload = function () {

};
/*function Localizar() {
    navigator.geolocation.getCurrentPosition(posiDoElemento);
    //console.log é feito para imprimir
}
function posiDoElemento(position) {
    console.log(position);
}*/


var map, infoWindow;
function initMap() {
    console.log("passeiaqui")
    map = new google.maps.Map(document.getElementById('Map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


