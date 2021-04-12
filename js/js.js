function initMap() {
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.75489309911848, lng: 15.055205739948274 },
    zoom: 13,
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#c4c4c4",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#707070",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#131417",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            lightness: "0",
          },
          {
            visibility: "on",
          },
          {
            color: "#666666",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
          {
            hue: "#ff000a",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#575757",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#2c2c2c",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#999999",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.stroke",
        stylers: [
          {
            saturation: "-52",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });

  const triangleCoords = [
    { lat: 50.79116123642392, lng: 15.016581932782872 },
    { lat: 50.788231225057, lng: 15.008513848721368 },
    { lat: 50.7846498506493, lng: 15.016581932782872 },
    { lat: 50.7630472619293, lng: 15.001990716926956 },
    { lat: 50.75544598917708, lng: 14.996154230584592 },
    { lat: 50.76141852170707, lng: 15.013148705522656 },
    { lat: 50.757400720095134, lng: 15.014693657789753 },
    { lat: 50.738827479964954, lng: 15.006282251002228 },
    { lat: 50.72307246772248, lng: 15.038382925885239 },
    { lat: 50.70833102433454, lng: 15.074464405839047 },
    { lat: 50.711562812618155, lng: 15.083242465152377 },
    { lat: 50.72552157792757, lng: 15.058133132697971 },
    { lat: 50.73392068261859, lng: 15.06344079646882 },
    { lat: 50.73004435988182, lng: 15.07630167406742 },
    { lat: 50.739605375733014, lng: 15.072014714867885 },
    { lat: 50.72022290660338, lng: 15.132848707318397 },
    { lat: 50.73353306477966, lng: 15.13305284823266 },
    { lat: 50.74955192843129, lng: 15.088345988008966 },
    { lat: 50.75200594758804, lng: 15.093449510865549 },
    { lat: 50.75794672436534, lng: 15.087529424351908 },
    { lat: 50.758850689510524, lng: 15.101002724693299 },
    { lat: 50.77124616405631, lng: 15.107943515778254 },
    { lat: 50.791639899738556, lng: 15.084059028676787 },
    { lat: 50.801446376761064, lng: 15.077322378307125 },
    { lat: 50.788155524465424, lng: 15.058949696023415 },
    { lat: 50.789446064135625, lng: 15.052417186766984 },
    { lat: 50.79241417017344, lng: 15.05221304585272 },
    { lat: 50.79151085350408, lng: 15.042822563746862 },
    { lat: 50.79116123642392, lng: 15.016581932782872 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#e31e23",
    strokeOpacity: 1,
    strokeWeight: 5,
    fillColor: "#100000",
    fillOpacity: 0.35,
  });

  function Animate(departure, arrival, timeout) {
    setTimeout(
      function (departure, arrival) {
        var departure = new google.maps.LatLng(departure.lat, departure.lng); //Set to whatever lat/lng you need for your departure location
        var arrival = new google.maps.LatLng(arrival.lat, arrival.lng); //Set to whatever lat/lng you need for your arrival location
        var line = new google.maps.Polyline({
          path: [departure, departure],
          strokeColor: "#e31e23",
          strokeOpacity: 1,
          strokeWeight: 5,
          geodesic: false, //set to false if you want straight line instead of arc
          map: map,
        });
        var step = 0;
        var numSteps = 5; //Change this to set animation resolution
        var timePerStep = 10; //Change this to alter animation speed
        var interval = setInterval(function () {
          step += 1;
          if (step > numSteps) {
            clearInterval(interval);
          } else {
            var are_we_there_yet = google.maps.geometry.spherical.interpolate(
              departure,
              arrival,
              step / numSteps
            );
            line.setPath([departure, are_we_there_yet]);
          }
        }, timePerStep);
      },
      timeout,
      departure,
      arrival
    );
  }

  var departure = null;
  triangleCoords.forEach((element, k) => {
    arrival = element;

    if (departure != null) {
      //setTimeout(Animate(departure, arrival), k * 10000);
      Animate(departure, arrival, k * 100);
    }

    departure = element;
  });

  setTimeout(function () {
    bermudaTriangle.setMap(map);
  }, triangleCoords.length * 100);
}
