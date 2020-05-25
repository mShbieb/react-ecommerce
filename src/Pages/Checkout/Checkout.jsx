import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {items} from "../../redux/cart/cart.getters";
import NumericInput from 'react-numeric-input';
import {deleteCartItem, updateCartItem} from "../../redux/cart/cart.action";

const CartItem = ({item, updateCartItem, deleteCartItem}) => (
    <tr>
        <td> <img src={item.imageUrl} width="60" alt={item.name}/></td>
        <td>{item.name}</td>
        <td className='text-center'>{item.price}</td>
        <td className='text-center'><NumericInput min={1} value={item.quantity} onChange={(val) =>{
            item.quantity = val;
            updateCartItem(item);
        }}/></td>
        <td className='text-center'>{item.quantity * item.price}</td>
        <td className='text-center'>
            <a href="javascript:;" onClick={() => deleteCartItem(item)}>
                <svg className="bi bi-x-circle text-danger" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
            </a>
        </td>
    </tr>
);


const CheckoutPage = ({items, updateCartItem, deleteCartItem}) => (
    <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Total</th>
                    <th className='text-center'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => <CartItem deleteCartItem={deleteCartItem} updateCartItem={updateCartItem} item={item} />)}
            </tbody>
        </table>

    </div>
)



const mapStateToProps = createStructuredSelector({
    items: items,
});

const mapDispatcherToProps = dispatch => ({
    updateCartItem: (item) =>dispatch(updateCartItem(item)),
    deleteCartItem: (item) =>dispatch(deleteCartItem(item)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(CheckoutPage);
