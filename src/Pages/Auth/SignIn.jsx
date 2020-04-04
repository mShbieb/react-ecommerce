import React from "react";
import {Field} from "../../Components/Field/Field";
import {CustomButton} from "../../Components/CustomButton/CustomButton";
import {withRouter} from 'react-router-dom';

import {auth, createUserProfile, signInWithGoogle} from "../../firebase/firebase";

class SignIn extends React.Component{

    state = {
        email: '',
        password: '',
    };

    handelSubmit = async event => {
        event.preventDefault();
        try{
            const {email, password} = this.state;
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            });
        }catch (e) {

        }
    };

    handelChange = event => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div>
                <h3 className='mb-5'>Sign in</h3>
                <form onSubmit={this.handelSubmit}>
                    <Field label='Email'  name='email' type='email' handelChange={this.handelChange} />
                    <Field label='Password' name='password' type='password' handelChange={this.handelChange} />
                    <CustomButton className='mr-2' text='login' type='submit' />
                    <CustomButton text='Sign in with google' onClick={signInWithGoogle} />
                </form>
            </div>
        );
    }
}

export default SignIn;
