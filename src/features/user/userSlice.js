import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        isLoggedIn: false,
        firstName: null,
        lastName: null,
        authError: null,
    },
    reducers: {
        getUser: (state, action) => {
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        },
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
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
        setAuthError: (state, action) => {
            state.authError = action.payload;
        },
    },
})

export const { getUser, updateUser, userAuthentication, authenticateUserSuccess, logoutUser, setUserData, setAuthError } = userSlice.actions
export default userSlice.reducer