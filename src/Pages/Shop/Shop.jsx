import React, { Component } from "react";
import SHOP_DATA from './shop.data';
import './_Shop.scss';
import {SectionPreview} from "../../Components/SectionPeview/SectionPreview";


class ShopPage extends Component{
    state = {
        sections: SHOP_DATA,
    };

    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.sections.map(section => <SectionPreview key={section.id} section={section} />)
                    }
                </div>
            </div>
        );
    }
}



export default ShopPage;