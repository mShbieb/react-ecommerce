import React from "react";

export const Field = ({label, type, name, className = '', handelChange, ...otherAttrs}) => (
    <div className="form-group">
        <label >{ label }</label>
        <input
            name={name}
            type={type || 'text'}
            className={['form-control', className].join(' ')}
            onChange={handelChange}
            { ...otherAttrs }
        />
    </div>
);
