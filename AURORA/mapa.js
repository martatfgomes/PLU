function myMap() {
    //definir uma localização
    const myLocation = new google.maps.LatLng(41.558326, -8.422004)
    const mapProp = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"), 
        mapProp)
//definir janela de informação
        const contentString = '<div id="content"><div id="siteNotice"></div>'+
        '<h3 id="firstHeading" class="firstHeading">APCB</h1>'+
        '<div id="bodyContent"><p> <b>Associação de Paralisia Cerebral de Braga</b> </p>' +
        '<div class="row">'+
        '<div class="col-md-12">Rua Dr. Feliciano Ramos, 10 700-378 Braga <br> T: 253 609 340 <br> E: geral@apcb.pt</div>'+
        '</div>'+
        '</div></div>';

    const infowindow = new google.maps.InfoWindow({ content: contentString, maxWidth: 450 });

        const marker = new google.maps.Marker({
            position:myLocation,
            map:map,
            animation:google.maps.Animation.BOUNCE
            })
          
            marker.addListener('click', function(){
                infowindow.open(map, marker)
            })
          marker.setMap(map);
        }