import React from "react";
import {Field} from "../../Components/Field/Field";
import {CustomButton} from "../../Components/CustomButton/CustomButton";

class SignIn extends React.Component{

    state = {
        email: '',
        password: '',
    };

    handelSubmit = event => {
        event.preventDefault();
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
                    <CustomButton text='login' type='submit' />
                </form>
            </div>
        );
    }
}

export default SignIn;
