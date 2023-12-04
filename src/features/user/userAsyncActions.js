import { userAuthentication } from './userSlice';

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

        const data = await response.json();

        // Dispatch success action with the token
        dispatch(userAuthentication({ token: data.token }));

    } catch (error) {
        console.log('ERROR');
    }
};

