import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import {HomePage} from "./Pages/Home/Home";
import ShopPage from "./Pages/Shop/Shop";
import {Header} from "./Components/Header/Header";
import {AuthPage} from "./Pages/Auth/Auth";
import {auth, createUserProfile} from "./firebase/firebase";


class App extends Component{
    state = {
        user: null,
    };

    userSubscribe = null;

    componentDidMount() {
        this.userSubscribe = auth.onAuthStateChanged(async authUser => {
            if (!authUser){
                this.setState({user: authUser});
                return;
            }
            const userRef = await createUserProfile(authUser);
            userRef.onSnapshot(snapshot => {
                this.setState({
                    user: {
                        id: snapshot.id,
                        ...snapshot.data(),
                    },
                })
            });
        });
    }

    componentWillUnmount() {
        this.userSubscribe();
    }

    render() {
        return (
            <div >
                <Header user={this.state.user} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/sign-in' component={AuthPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
