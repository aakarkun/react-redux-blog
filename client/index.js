import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

render(<Provider store={store}>
            <Root />
        </Provider>, document.getElementById('app'));

if(module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextApp = require('./components/Root').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>, document.getElementById('app')
        );
    });
}