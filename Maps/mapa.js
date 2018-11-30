function myMap() {
    //definir uma localização
    const myLocation = new google.maps.LatLng(41.558326, -8.422004)
    //definir propriedades do mapa
    const mapProp = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    //definir mapa
    const map = new google.maps.Map(document.getElementById("googleMap"), 
        mapProp)

    //criar um marcador
     const marker = new google.maps.Marker({
        position:myLocation,
        animation:google.maps.Animation.BOUNCE
        });
      
      marker.setMap(map);
}