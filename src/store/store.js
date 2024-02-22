import {configureStore} from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { authApi } from './apis/authApi';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware);
      },
})