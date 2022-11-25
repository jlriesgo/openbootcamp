// Initialize and add the map
function initMap() {
    // The location of Uluru
    const posicionNY = { 
        lat: 40.71427,
        lng: -74.00597
     };

     const posicionMadrid = {
        lat: 40.4165,
        lng: -3.70256
     }

     const posicionTokyo = {
        lat: 35.6895,
        lng: 35.6895
     }


    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: posicionNY,
    });
    // The marker, positioned at Uluru
    const markerNY = new google.maps.Marker({
      position: posicionNY,
      map,
      title: "Posición inicial"
    });

    const markerMadrid = new google.maps.Marker({
        position: posicionMadrid,
        map,
        title: "Posición inicial"
      });

      const markerTokyo = new google.maps.Marker({
        position: posicionTokyo,
        map,
        title: "Posición inicial"
      });
  }
  
