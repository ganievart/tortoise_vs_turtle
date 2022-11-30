import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducer';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
    reducer: {
        imageState: imageReducer
    },
});

export default store;