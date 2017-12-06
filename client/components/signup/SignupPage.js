import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

 class SignupPage extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return(
            <div className="ui container">
                <div className="ui two column centered grid">
                    <div className="column">
                        <h2>Join our community!</h2>
                        <SignupForm userSignupRequest={userSignupRequest}/>
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignupPage);