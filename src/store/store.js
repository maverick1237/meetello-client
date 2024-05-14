import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import roomReducer from './roomSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const roomPersistConfig = {
    key: 'room',
    storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedRoomReducer = persistReducer(roomPersistConfig, roomReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        room: persistedRoomReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };