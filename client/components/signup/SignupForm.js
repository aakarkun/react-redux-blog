import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import map from 'lodash/map';

 class SignupForm extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             username: '',
             email: '',
             password: '',
             passwordConfirmation: '',
             timezone: ''
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     onChange(e) {
         this.setState({ [e.target.name]: e.target.value })
     }

     onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>  
        );
        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username" 
                        placeholder="Username"
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email" 
                        placeholder="Email"
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="field">
                    <label>Password Confirmation</label>
                    <input 
                        type="password"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        name="passwordConfirmation" 
                        placeholder="Retype password"
                    />
                </div>
                <div className="field">
                    <label>Timezone</label>
                    <select 
                        className="ui search dropdown"
                        name="timezone"
                        onChange={this.onChange}
                        value={this.state.timezone}    
                    >
                        <option value="" disabled>Choose your Timezone!</option>
                        {options}
                    </select> 
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;