import React from 'react';
import SignupForm from './SignupForm';

 class SignupPage extends React.Component {
    render() {
        return(
            <div className="ui container">
                <div className="ui two column centered grid">
                    <div className="column">
                        <h2>Join our community!</h2>
                        <SignupForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;