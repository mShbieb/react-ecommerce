import React from "react";
import './_SectionPreview.scss';
import ProductItem from "../ProductItem/ProductItem";
import { Link } from "react-router-dom";
export const SectionPreview = ({section}) => (
    <div className='SectionPreview'>
        <Link  to={`/shop/${section.routeName}`}>
            <h3>{ section.title }</h3>
        </Link>
        <div className="row">
            {section.items.slice(0, 4).map(item => <ProductItem key={item.id} item={item} />)}
        </div>
    </div>
);
