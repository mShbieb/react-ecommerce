import React from "react";
import './CartIcon.scss';
import {CustomButton} from "../CustomButton/CustomButton";
import {connect} from 'react-redux';
import {toggleDropdownStatus} from "../../redux/cart/cart.action";

const CardDropdown = () => (
    <div className="card-dropdown">
        <div className="item-list"></div>
        <CustomButton text='Checkout' />
    </div>
);

const CartIcon = ({ dropdown_status, toggleDropdown }) => (
    <div className='CartIcon'>
        <div onClick={toggleDropdown}>
            Cart: <span>0</span>
        </div>
        {dropdown_status ? <CardDropdown /> : null}
    </div>
);


const mapStateToProps = state => ({
    dropdown_status: state.cart.dropdown_status,
});
const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleDropdownStatus()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
