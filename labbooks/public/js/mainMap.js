let myMap

function initMap() {
    renderMap()

    getPlaces()
    console.log(places)
}

function getPlaces() {

    axios
        .get('/api/places')
        .then(response => setMarkers(response.data))
        .catch(err => console.log(err))
}

function setMarkers(places) {
    places.forEach(elm => {

        const lat = elm.location.coordinates[0]
        const lng = elm.location.coordinates[1]

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}

function renderMap() {
    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 4,
            center: { lat: 0, lng: 0 }
        }
    )
}
