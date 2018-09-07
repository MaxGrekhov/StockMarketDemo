import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles.scss';

import './icons';
import store from './store';

import App from 'components/layout/App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));