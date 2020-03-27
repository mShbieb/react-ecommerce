import React from "react";
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';


const MenuItem = ({ item, history }) => (
    <div className={item.size + ' mb-4'}>
        <div className="main-item"
             style={{
                backgroundImage: `url(${item.imageUrl})`,
                height: item.size === 'col-md-6' ? '400px' : '300px',
            }}
             onClick={() => history.push(`/${item.link}`)}
        >
            <div className="content">
                <h1>{ item.title }</h1>
                <span>show now</span>
            </div>
        </div>
    </div>
);

export default withRouter(MenuItem);
