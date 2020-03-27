import React from "react";
import './_Home.scss';

import {Directory} from "../../Components/Directory/Directory";


export const HomePage = () => (
    <div className="Home">
        <div className="container">
            <Directory />
        </div>
    </div>
);
