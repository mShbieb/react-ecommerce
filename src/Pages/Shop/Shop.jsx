import React, { Component } from "react";
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';


import './_Shop.scss';
import SectionsPreview from "../../Components/SectionsPreview/SectionsPreview";
import CategoryPage from "../Category/Category";



class ShopPage extends Component{
    render() {
        return (
            <div>
                <div className="container">
                    <Route exact path={this.props.match.path} component={SectionsPreview} />
                    <Route path={this.props.match.path + '/:category'} component={CategoryPage} />
                </div>
            </div>
        );
    }
}


export default connect()(ShopPage);
