//feather icons
feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

//inicializa e adiciona o mapa
function initMap() {
    //localização do Uluru
    //var uluru = {lat: -25.344, lng: 131.036};
    var uluru = { lat: -3.71839, lng: -38.5434 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap">

