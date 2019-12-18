import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import Menu from "./Menu";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Garage from "./pages/Garage";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/Login'} component={Login}/>
                    <Route path={'/Register'} component={Register}/>
                    <Route path={'/About'} component={About}/>

                    <Route path={'/Home'} component={Menu}/>
                    <Route path={'/Shop'} component={Menu}/>
                    <Route path={'/Garage'} component={Menu}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
