import React from "react";
import './_ProductItem.scss';

export const ProductItem = ({item}) => (
    <div  className='col-md-3 ProductItem'>
        <div style={{ backgroundImage: `url(${item.imageUrl})` }} className='image' >
            <div>add to cart</div>
        </div>
        <div className="__footer">
            <span>{ item.name }</span>
            <span>${ item.price }</span>
        </div>
    </div>
);
