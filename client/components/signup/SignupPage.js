import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';

 class SignupPage extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return(
            <div className="ui container">
                <div className="ui two column centered grid">
                    <div className="column">
                        <h2>Join our community!</h2>
                        <SignupForm userSignupRequest={userSignuprequest}/>
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupPage;