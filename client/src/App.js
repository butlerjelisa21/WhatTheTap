import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Four from "./pages/404"; 
import Team from "./pages/Team";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// map in react
// import { Map, GoogleApiWrapper } from 'google-maps-react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/search"} component={Search}/>
          <Route exact path={"/team"} component={Team}/>
          <Route path={"*"} component={Four} />
        </Switch>
      </Router>
    </div>
  );
}

// for google map in react 
// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat:"",
//          lng:"",
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAIpJqbv9keeACMWP2A_s2irfrQVA5EILs'
// })(MapContainer);


export default App;
