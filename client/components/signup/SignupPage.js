import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

 class SignupPage extends React.Component {
    render() {
        const { userSignupRequest, addFlashMessage } = this.props;
        return(
            <div className="ui container">
                <div className="ui two column centered grid">
                    <div className="column">
                        <h2>Join our community!</h2>
                        <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
                    </div>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest, addFlashMessage })(SignupPage);