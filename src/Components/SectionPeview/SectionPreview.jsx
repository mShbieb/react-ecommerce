import React from "react";
import './_SectionPreview.scss';
import ProductItem from "../ProductItem/ProductItem";

export const SectionPreview = ({section}) => (
    <div className='SectionPreview'>
        <h3>{ section.title }</h3>
        <div className="row">
            {section.items.slice(0, 4).map(item => <ProductItem key={item.id} item={item} />)}
        </div>
    </div>
);
