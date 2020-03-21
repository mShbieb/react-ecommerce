import React from "react";

import './Directory.scss';

import {MenuItem} from "../MenuItem/MenuItem";

export class Directory extends React.Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                size: 'col-md-4'
            },{
                id: 2,
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                size: 'col-md-4'
            },{
                id: 3,
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                size: 'col-md-4'
            },{
                id: 4,
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'col-md-6'
            },{
                id: 5,
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'col-md-6'
            },
        ],
    };

    render() {
        return (
            <div className="row">
                { this.state.sections.map(item => <MenuItem key={item.id} item={item} />) }
            </div>
        )
    }
}
