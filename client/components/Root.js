import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

 class Root extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
    }
 }

 export default Root;