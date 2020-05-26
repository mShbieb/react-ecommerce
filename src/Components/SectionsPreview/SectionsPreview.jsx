import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {SectionPreview} from "../../Components/SectionPeview/SectionPreview";
import {sections} from "../../redux/shops/shops.getters";


const SectionsPreview = ({sections}) => (
    <div>
        {
            sections.map(section => <SectionPreview key={section.id} section={section} />)
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    sections: sections,
});

export default connect(mapStateToProps)(SectionsPreview);
