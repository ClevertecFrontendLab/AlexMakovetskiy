import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from "redux-first-history/rr6";

import { history, store } from '@redux/configure-store';
import { router } from './services/router/router';

import 'normalize.css';
import './index.css';
import './globals.module.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>{router}</HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
