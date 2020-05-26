import React, { Component } from "react";
import {connect} from 'react-redux';

import './_Shop.scss';
import SectionsPreview from "../../Components/SectionsPreview/SectionsPreview";



class ShopPage extends Component{

    render() {
        return (
            <div>
                <div className="container">
                    <SectionsPreview />
                </div>
            </div>
        );
    }
}


export default connect()(ShopPage);
