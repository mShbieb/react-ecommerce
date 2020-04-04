import React from "react";
import './_Header.scss';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import {auth} from "./../../firebase/firebase";

const Header = ({user}) => (
    <div className='Header'>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Test App</a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link" >Shop</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user
                                    ? <span style={{cursor: 'pointer'}} className="nav-link" onClick={() => auth.signOut()}>Sign out</span>
                                    : <Link to="/sign-in" className="nav-link" >Sign in</Link>
                            }

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);


const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Header);
