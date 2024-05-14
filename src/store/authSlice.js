import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userData:null,
    roomsData: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            // Add logic for logout here
            state.userData = null;
            state.isLoggedIn = false;
            state.roomsData = [];
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;