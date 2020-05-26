import {sectionsActionTypes} from "./sections.types";

const initState = {
    sections: [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            size: 'col-md-4',
            link: 'hats',
        },{
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            size: 'col-md-4',
            link: '',
        },{
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            size: 'col-md-4',
            link: '',
        },{
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'col-md-6',
            link: '',
        },{
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'col-md-6',
            link: '',
        },
    ],
};


const sectionsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default sectionsReducer;
