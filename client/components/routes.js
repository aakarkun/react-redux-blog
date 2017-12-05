import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Greetings from './Greetings';
import Home from './Home';
import Blog from './Blog';
import SignupPage from './signup/SignupPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='signup' component={SignupPage} />
        <Route path='blog' component={Blog} />
    </Route>
);

export default routes;