import React from "react";
import './_CustomButton.scss'

export const CustomButton = ({ text, type, className='', onClick, children }) => (
    <button
        type={ type || 'button' }
        className={['btn px-4 btn-primary', className].join(' ')}
        onClick={onClick}
    >
        {text}
        {children}
    </button>
);
