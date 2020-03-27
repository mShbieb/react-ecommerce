import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import {HomePage} from "./Pages/Home/Home";
import ShopPage from "./Pages/Shop/Shop";



class App extends Component{
    render() {
        return (
            <div >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
