import { userAuthentication, updateUser } from './userSlice';

export const authenticateUser = (credentials) => async (dispatch) => {
    try {
        // Make API call to authenticate user
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        const data = await response.json()
        const { token } = data.body.token

        dispatch(userAuthentication({ token: data.token }))
        dispatch(updateUser({ token, isLoggedIn: true }))

    } catch (error) {
        console.log('ERROR');
    }
};
export const getUserData = (credentials) => async (dispatch) => {
    const token = dispatch(userAuthentication({ token: credentials.token }))
    console.log(token)

    try {
        // Make API call to get user data
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        const data = await response.json();
        dispatch({ type: 'SET_USER', payload: data })

    } catch (error) {
        console.log('ERROR', error);
    }
};

