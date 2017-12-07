import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
// import browserHistory from 'react-router';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextField from '../common/TextField';

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

     isValid() {
         const { errors, isValid } = validateInput(this.state);

         if(!isValid) {
             this.setState({ errors });
         }

         return isValid;
     }

     onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    // browserHistory.push('/');
                    this.context.router.push('/');
                },
                (data) => this.setState({ errors: data.response.data, isLoading: false })
            );
        }
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>  
        );
        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <TextField
                    error={errors.username}
                    value={this.state.username}
                    onChange={this.onChange}
                    field="username"
                    label="Username"
                />
                <TextField
                    error={errors.email}
                    value={this.state.email}
                    onChange={this.onChange}
                    field="email"
                    label="Email"
                />
                <TextField
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                    field="password"
                    label="Password"
                    type="password"
                />
                <TextField
                    error={errors.passwordConfirmation}
                    value={this.state.passwordConfirmation}
                    onChange={this.onChange}
                    field="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                />
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

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;