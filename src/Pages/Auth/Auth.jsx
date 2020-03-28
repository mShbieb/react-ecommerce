import React from "react";
import './_Auth.scss';
import SignIn from "./SignIn";

export const AuthPage = () => (
    <div className='Auth'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <SignIn />
                </div>
                <div className="col-md-6">Sign up</div>
            </div>
        </div>
    </div>
);
