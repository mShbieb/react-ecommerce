import React from "react";
import './CartIcon.scss';
import {CustomButton} from "../CustomButton/CustomButton";
import {connect} from 'react-redux';
import {toggleDropdownStatus} from "../../redux/cart/cart.action";



const CartItem = ({item}) => (
    <div className='CartItem'>
        <img src={item.imageUrl} alt=""/>
        <div>
            <p>{ item.name }</p>
            <p>{ item.price } × { item.quantity }</p>
        </div>
    </div>
);


const CardDropdown = ({items}) => (
    <div className="card-dropdown">
        <div className="item-list">
            { items.map(item => <CartItem item={item} /> ) }
        </div>
        <CustomButton text='Checkout' />
    </div>
);

const CartIcon = ({ dropdown_status, toggleDropdown, items }) => (
    <div className='CartIcon'>
        <div onClick={toggleDropdown}>
            Cart: <span>{items.length}</span>
        </div>
        {dropdown_status ? <CardDropdown items={items} /> : null}
    </div>
);


const mapStateToProps = state => ({
    dropdown_status: state.cart.dropdown_status,
    items: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleDropdownStatus()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
