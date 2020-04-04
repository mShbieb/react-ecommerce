import React from "react";
import {Field} from "../../Components/Field/Field";
import {CustomButton} from "../../Components/CustomButton/CustomButton";
import {auth, createUserProfile} from "../../firebase/firebase";
import {withRouter} from 'react-router-dom';

class SignUp extends React.Component{

    state = {
        displayName: '',
        email: '',
        password: '',
    };

    handelSubmit = async event => {
        event.preventDefault();
        try{
            const {displayName, email, password} = this.state;
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
            });
            this.props.history.push('/');
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
                <h3 className='mb-5'>Sign Up</h3>
                <form onSubmit={this.handelSubmit}>
                    <Field required label='Name'  name='displayName' handelChange={this.handelChange} />
                    <Field required label='Email'  name='email' type='email' handelChange={this.handelChange} />
                    <Field required label='Password' name='password' type='password' handelChange={this.handelChange} />
                    <CustomButton className='mr-2' text='Sign up' type='submit' />
                </form>
            </div>
        );
    }
}

export default withRouter(SignUp);
