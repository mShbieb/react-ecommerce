import React from "react";
import {connect} from 'react-redux';
import './_Category.scss';
import {sectionByName} from "../../redux/shops/shops.getters";


const CategoryPage = ({match, section}) => {
    console.log(match.params.category);
    return (
        <div>
            <h3>Category Page</h3>
            <h3>{ section.name }</h3>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    section: sectionByName(props.match.params.category)(state),
});


export default connect(mapStateToProps)(CategoryPage);
