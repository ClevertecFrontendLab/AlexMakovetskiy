import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import ToggleLoadingSlice from './toggle-loading/toggle-loading-slice';
import userDataSlice from './user-data/user-data-slice';

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory(),  savePreviousLocations: 1 });

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        ToggleLoadingSlice,
        userDataSlice
    }),    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;