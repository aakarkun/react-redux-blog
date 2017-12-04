import React from 'react';
import { render } from 'react-dom';
import NavigationBar from './NavigationBar';
import { Router } from 'react-router';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <NavigationBar />
                <div className="ui container" style={{paddingTop: "20px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
