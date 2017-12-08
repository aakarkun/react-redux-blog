import React from 'react';
import { render } from 'react-dom';
import NavigationBar from './NavigationBar';
import { Router } from 'react-router';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <NavigationBar />
                <FlashMessagesList />
                <div className="ui container" style={{paddingTop: "20px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
