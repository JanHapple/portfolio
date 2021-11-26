import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import "./styles/App.scss"



const About = ()=>{
    return (
        <h2>&#123;kl&#125;</h2>
    )
}
const App = () => {

    return (
    <div className="container">        
    <Navbar />
        <Router>
            <Switch>
                <Route path="/" exact  render={() => <Home />} />
                <Route path="/story" exact  component = {About} /> 
            </Switch>
        </Router>
    </div>
    );
}

export default App;