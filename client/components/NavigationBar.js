import React from 'react';
import { Link } from 'react-router';
import SignupPage from './signup/SignupPage'; 

 class NavigationBar extends React.Component {
    render() {
        return(
            <div>
                <div className="ui attached stackable menu">
                    <div className="ui container">
                        <Link to='/' className="item">
                            <i className="home icon"></i> Home
                        </Link>
                        <Link to='/blog' className="item">
                            <i className="book icon"></i> Blog                            
                        </Link>
                        <div className="right item">
                            <div className="ui input">
                                <input type="text" placeholder="Search..."/>
                                <Link to='/signup' className="item">Sign Up</Link>
                                <Link to='#' className="item">Help</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;