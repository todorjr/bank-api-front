import { userAuthentication, updateUser, getUser, setAuthError } from './userSlice'

export const authenticateUser = (credentials) => async (dispatch) => {
    try {
        // Make API call to authenticate user
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })

        if (!response.ok) {
            throw new Error('Authentication failed')
        }

        const data = await response.json()
        const token = data.body.token

        dispatch(setAuthError(null));
        dispatch(userAuthentication({ token }))
        dispatch(updateUser({ token, isLoggedIn: true }))

    } catch (error) {
        console.log('ERROR')
        dispatch(setAuthError('Authentication failed'));
    }
}

export const getUserData = (token) => async (dispatch) => {
    try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error('Authentication failed')
    }

    const data = await response.json()
    dispatch(getUser(data))

    } catch (error) {
        console.log('ERROR', error)
    }
}

export const updateUserData = (token, userDetails) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userDetails),
        })

        if (!response.ok) {
            throw new Error('Failed to update user details')
        }

        const data = await response.json()
        dispatch(updateUser(data.body))

    } catch (error) {
        console.log('ERROR', error)
    }
}


