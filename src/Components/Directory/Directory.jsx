import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './Directory.scss';

import {sections} from "../../redux/sections/sections.getters";

import MenuItem from "../MenuItem/MenuItem";

class Directory extends React.Component {
    render() {
        return (
            <div className="row">
                { this.props.sections.map(item => <MenuItem key={item.id} item={item} />) }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: sections,
});

export default connect(mapStateToProps)(Directory);
