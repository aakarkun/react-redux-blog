import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

render(<Root />, document.getElementById('app'));

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