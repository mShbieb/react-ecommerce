import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import {Home} from "./Pages/Home/Home";

const Hats = () => (
    <h1>Hats Page</h1>
);

class App extends Component{
    render() {
        return (
            <div >
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/hats' component={Hats} />
                </Switch>
            </div>
        );
    }
}

export default App;
