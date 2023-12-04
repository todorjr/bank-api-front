import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
    },
    reducers: {
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        userAuthentication: (state, action) => {
            state.token = action.payload.token;
        },
        authenticateUserSuccess: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.token = null;
        },
    },
});

export const { updateUser, userAuthentication, authenticateUserSuccess, logoutUser } = userSlice.actions;
export default userSlice.reducer;

