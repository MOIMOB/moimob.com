import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { HelmetProvider } from 'react-helmet-async';
import { hotjar } from 'react-hotjar'
import config from './config';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

hotjar.initialize(config.hotjar.id, config.hotjar.snippetVersion);
reportWebVitals();
