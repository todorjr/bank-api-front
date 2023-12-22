import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        isLoggedIn: false
    },
    reducers: {
        getUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.token = action.payload.token
        },
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        userAuthentication: (state, action) => {
            state.token = action.payload.token
        },
        authenticateUserSuccess: (state) => {
            state.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.token = null
            state.isLoggedIn = false
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { getUser, updateUser, userAuthentication, authenticateUserSuccess, logoutUser, setUserData } = userSlice.actions
export default userSlice.reducer