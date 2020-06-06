import React from "react";
import './_ProductItem.scss';
import { connect } from 'react-redux';
import {addToCart} from "../../redux/cart/cart.action";

const ProductItem = ({item, addToCart, className=''}) => (
    <div className={['col-md-3', className].join(' ')}>
        <div className='ProductItem'>
            <div style={{ backgroundImage: `url(${item.imageUrl})` }} className='image' >
                <div onClick={() => addToCart(item)}>add to cart</div>
            </div>
            <div className="__footer">
                <span>{ item.name }</span>
                <span>${ item.price }</span>
            </div>
        </div>
    </div>
);


const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
});


export default connect(null, mapDispatchToProps)(ProductItem);
