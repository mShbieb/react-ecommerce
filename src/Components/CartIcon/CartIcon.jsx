import React from "react";
import './CartIcon.scss';
import {CustomButton} from "../CustomButton/CustomButton";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleDropdownStatus} from "../../redux/cart/cart.action";
import {dropdownStatus, itemCount, items} from "../../redux/cart/cart.getters";
import { withRouter } from 'react-router-dom';




const CartItem = ({item}) => (
    <div className='CartItem'>
        <img src={item.imageUrl} alt=""/>
        <div>
            <p>{ item.name }</p>
            <p>${ item.price } × { item.quantity }</p>
        </div>
    </div>
);


const CardDropdown = withRouter(({items, toggleDropdown, history}) => (
    <div className="card-dropdown">
        <div className="item-list">
            {
                items.length
                ? items.map(item => <CartItem item={item} /> )
                : <span>Empty cart</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toggleDropdown();
        }} text='Checkout' />
    </div>
));

const CartIcon = ({ dropdown_status, toggleDropdown, items, itemCount }) => (
    <div className='CartIcon'>
        <div onClick={toggleDropdown}>
            Cart: <span>{itemCount}</span>
        </div>
        {dropdown_status ? <CardDropdown toggleDropdown={toggleDropdown} items={items} /> : null}
    </div>
);


const mapStateToProps = createStructuredSelector({
    dropdown_status: dropdownStatus,
    items: items,
    itemCount: itemCount,
});

const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleDropdownStatus()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
