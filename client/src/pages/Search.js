import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

const styles = {
  inputDiv: {
    textAlign: "center",
    marginBottom: "3%"
  },
  map: {
    margin: "0 auto",
    width: "70%",
    height: "70vh",
    marginBottom: "25px"
  }
};

export class Search extends Component {
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

  geocodeZip = url => {
    let that = this;
    let newLat;
    let newLng;
    var req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", url, true);
    req.onload = function() {
      var jsonResponse = req.response.results[0];
      console.log("json response = " + jsonResponse);
      newLat = jsonResponse ? jsonResponse.geometry.location.lat : 33.0787152;
      newLng = jsonResponse ? jsonResponse.geometry.location.lng : -96.8083063;
      that.createGoogleMap(newLat, newLng);
    };
    req.send(null);
  };

  createGoogleMap = (newLat, newLng) => {
    let searchLoc = new window.google.maps.LatLng(newLat, newLng);

    let infowindow = new window.google.maps.InfoWindow();

    let map = new window.google.maps.Map(
      document.getElementById("google-map"),
      {
        center: searchLoc,
        zoom: 13
      }
    );

    // Search for bars in searchLoc
    var request = {
      location: searchLoc,
      radius: "10000",
      type: ["bar"]
    };

    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    // new window.google.maps.Map(document.getElementById("google-map"), {
    //   center: {
    //     lat: newLat,
    //     lng: newLng
    //   },
    //   zoom: 13
    // });

    function callback(results, status) {
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(place);
        }
      }

      // Creates marker on map
      function createMarker(place) {
        var marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        var placeName = place.name.toUpperCase();
        var address = place.vicinity;
        var rating = place.rating;

        window.google.maps.event.addListener(marker, "click", function() {
          infowindow.setContent(
            '<p id="link-thing"><strong>' +
              placeName +
              "</strong></p><p>" +
              address +
              "</p><p>Rating: " +
              rating +
              '</p><p><a href="http://www.google.com/search?q=' +
              place.name +
              '">Google Search</a></p>'
          );

          infowindow.open(map, this);
        });
      }
    }
  };

  render() {
    return (
<<<<<<< HEAD
        
      <div><h1>Hello</h1></div>
    )
=======
      <div>
        <div style={styles.inputDiv}>
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
        <div id="google-map" style={styles.map}></div>
      </div>
    );
>>>>>>> 71c8ef2c74e7e5155946e7d3f3dd3772cdb4fc52
  }
}
// export default Search;
export default GoogleApiWrapper({
  apiKey: "AIzaSyAIpJqbv9keeACMWP2A_s2irfrQVA5EILs"
})(Search);
