import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Four from "./pages/404"; 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/search"} component={Search}/>
          <Route component={Four} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
