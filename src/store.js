import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducer';
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
    reducer: {
        imageState: imageReducer
    }
});

export default store;