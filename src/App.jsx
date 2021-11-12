import React from "react";
// import { adaptV4Theme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, Typography, CssBaseline } from "@mui/material";
import customTheme from "./theme";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import "./styles/App.css"



const About = ()=>{
    return (
        <h2>&#123;kl&#125;</h2>
    )
}
const App = () => {

    return (
        <div className="container">
            <ThemeProvider theme={customTheme}>
                    <CssBaseline />
                    <Navbar />
                    <Typography variant="h1"> Router App </Typography>
                <Router>
                    <Switch>
                        <Route path="/" exact  render={() => <Home />} />
                        <Route path="/about" exact  component = {About} />
                        
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;