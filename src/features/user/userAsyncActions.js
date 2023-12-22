import { userAuthentication, updateUser, getUser } from './userSlice';

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
        const token = data.body.token

        dispatch(userAuthentication({ token }))
        dispatch(updateUser({ token, isLoggedIn: true }))

    } catch (error) {
        console.log('ERROR');
    }
};
export const getUserData = (token) => async (dispatch) => {
    try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Authentication failed');
    }

    const data = await response.json();
    console.log(data);

    dispatch(getUser(data));

    } catch (error) {
        console.log('ERROR', error);
    }
}

