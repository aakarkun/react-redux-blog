import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path='signup' component={SignupPage} />
    </Route>
);

export default routes;