import React from "react";
import './MenuItem.scss';


export const MenuItem = ({ item }) => (
    <div className={item.size + ' mb-4'}>
        <div className="main-item" style={{
            backgroundImage: `url(${item.imageUrl})`,
            height: item.size === 'col-md-6' ? '400px' : '300px',
        }}>
            <div className="content">
                <h1>{ item.title }</h1>
                <span>show now</span>
            </div>
        </div>
    </div>
);
