import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import {HomePage} from "./Pages/Home/Home";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import {AuthPage} from "./Pages/Auth/Auth";
import {auth, createUserProfile} from "./firebase/firebase";
import {setUser} from "./redux/auth/user.action";
import CheckoutPage from "./Pages/Checkout/Checkout";


class App extends Component{

    userSubscribe = null;

    componentDidMount() {
        this.userSubscribe = auth.onAuthStateChanged(async authUser => {
            if (!authUser){
                this.props.setUser(authUser);
                return;
            }
            const userRef = await createUserProfile(authUser);
            userRef.onSnapshot(snapshot => {
                this.props.setUser({
                    id: snapshot.id,
                    ...snapshot.data(),
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
                <Header  />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/sign-in' render={() => this.props.user ? <Redirect to='/' /> : <AuthPage />} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
});

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
