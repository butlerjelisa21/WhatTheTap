import React, { Component } from "react";

const styles = {
  map: {
    height: "100%"
  }
};

export default class Search extends Component {
  state = {
    zipcode: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    let zipcode = this.state.zipcode;
    let url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      zipcode +
      "&key=AIzaSyAIpJqbv9keeACMWP2A_s2irfrQVA5EILs";

    this.geocodeZip(url);
  };

  geocodeZip = (url) => {
    let lat;
    let lng;
    var req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", url, true);
    req.onload = function() {
      var jsonResponse = req.response;
      lat = jsonResponse.results[0].geometry.location.lat;
      lng = jsonResponse.results[0].geometry.location.lng;
      console.log(lat, lng);
    };
    req.send(null);
    // setTimeout((lat, lng) => this.initMap(lat, lng), 500);
  };



  // initMap = (lat, lng) => {
  //   var searchLoc = new google.maps.LatLng(lat, lng);

  //   infowindow = new google.maps.InfoWindow();

  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: searchLoc,
  //     zoom: 13
  //   });

  //    var request = {
  //      location: searchLoc,
  //      radius: "10000",
  //      type: ["bar"]
  //   };

  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, callback);
  // };

  // callback = (results, status) => {
  //     if (status == google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         var place = results[i];
  //         var placeid = place.place_id;
  //         var name = place.name;
  //         console.log(place);
  //         createMarker(place);
  //       }
  //     }

  //     // Creates marker on map
  //     function createMarker(place) {
  //       var marker = new google.maps.Marker({
  //         map: map,
  //         position: place.geometry.location
  //       });

  //       var placeName = place.name.toUpperCase();
  //       var address = place.vicinity;
  //       var rating = place.rating;

  //       google.maps.event.addListener(marker, "click", function() {
  //         infowindow.setContent(
  //           '<p id="link-thing"><strong>' +
  //             placeName +
  //             "</strong></p><p>" +
  //             address +
  //             "</p><p>Rating: " +
  //             rating +
  //             '</p><p><a href="http://www.google.com/search?q=' +
  //             place.name +
  //             '">Google Search</a></p>'
  //         );

  //         infowindow.open(map, this);
  //       });
  //     }
  //   }

  render() {
    return (
      <div>
        <div>
          <h2>Enter your zipcode to find a brewery near you!</h2>
          <input
            placeholder="Enter your zipcode"
            type="text"
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}
