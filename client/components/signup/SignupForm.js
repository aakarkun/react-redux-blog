import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';

 class SignupForm extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             username: '',
             email: '',
             password: '',
             passwordConfirmation: '',
             timezone: '',
             errors: {},
             isLoading: false
         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     onChange(e) {
         this.setState({ [e.target.name]: e.target.value })
     }

     onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(
            () => {},
            (data) => this.setState({ errors: data.response.data, isLoading: false })
        );
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>  
        );
        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className={classnames('field', {'error': errors.username})}>
                    <label>Username</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username" 
                        placeholder="Username"
                    />
                    {errors.username && <span style={{color: "#9f3a38"}}>{errors.username}</span>}
                </div>
                <div className={classnames('field', {'error': errors.email})}>
                    <label>Email</label>
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email" 
                        placeholder="Email"
                    />
                    {errors.email && <span style={{color: "#9f3a38"}}>{errors.email}</span>}
                </div>
                <div className={classnames('field', {'error': errors.password})}>
                    <label>Password</label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password" 
                        placeholder="Password"
                    />
                    {errors.password && <span style={{color: "#9f3a38"}}>{errors.password}</span>}                    
                </div>
                <div className={classnames('field', {'error': errors.passwordConfirmation})}>
                    <label>Password Confirmation</label>
                    <input 
                        type="password"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        name="passwordConfirmation" 
                        placeholder="Retype password"
                    />
                    {errors.passwordConfirmation && <span style={{color: "#9f3a38"}}>{errors.passwordConfirmation}</span>}                    
                </div>
                <div className={classnames('field', {'error': errors.timezone})}>
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
                    {errors.timezone && <span style={{color: "#9f3a38"}}>{errors.timezone}</span>}                     
                </div>
                <button disabled={this.state.isLoading} className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;