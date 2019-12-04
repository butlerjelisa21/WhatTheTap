import React from 'react';
import "./App.css";
import "./Login.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; 
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
<<<<<<< HEAD
          <Route  exact path={"/login"} component={Login} />
=======
          <Route path={"*"} component={Four} />
>>>>>>> 71c8ef2c74e7e5155946e7d3f3dd3772cdb4fc52
        </Switch>
      </Router>
    </div>
  );

  
}


<<<<<<< HEAD

=======
>>>>>>> 71c8ef2c74e7e5155946e7d3f3dd3772cdb4fc52
export default App;
