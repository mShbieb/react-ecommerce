import React from "react";
import './_Auth.scss';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const AuthPage = () => (
    <div className='Auth'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <SignIn />
                </div>
                <div className="col-md-6">
                    <SignUp />
                </div>
            </div>
        </div>
    </div>
);
