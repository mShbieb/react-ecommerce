import React from "react";
import './_SectionPreview.scss';

export const SectionPreview = ({section}) => (
    <div>
        <h3>{ section.title }</h3>
        <div className="row">
            {section.items.map(item => (
                <div className='col-md-3'>
                    {item.name}
                </div>
            ))}
        </div>
    </div>
);
