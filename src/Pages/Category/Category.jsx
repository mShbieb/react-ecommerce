import React from "react";
import {connect} from 'react-redux';
import './_Category.scss';
import {sectionByName} from "../../redux/shops/shops.getters";
import ProductItem from "../../Components/ProductItem/ProductItem";


const CategoryPage = ({match, section}) => {
    return (
        <div>
            <h3 className='mb-5'>{ section.title }</h3>
            <div className="row">
                {section.items.map(item => <ProductItem className='mb-4' key={item.id} item={item} />)}
            </div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    section: sectionByName(props.match.params.category)(state),
});


export default connect(mapStateToProps)(CategoryPage);
