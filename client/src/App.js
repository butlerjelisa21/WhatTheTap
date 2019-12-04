import React from 'react';
import "./App.css";
import "./Login.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; 
import Team from "./pages/Team";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/search"} component={Search}/>
          <Route exact path={"/team"} component={Team}/>
          <Route  exact path={"/login"} component={Login} />
        </Switch>
      </Router>
    </div>
  );

  
}



export default App;
