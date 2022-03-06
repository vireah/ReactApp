import axios from 'axios';
import { userLoginAction } from './actionCreators';

export const getCurrentUser = (action) => async (dispatch, getState) => {
	const token = localStorage.getItem('token');
    const response = await axios({
        method: 'get',
        headers: { Authorization: token },
        url: 'http://localhost:3000/users/me',
    });

    if (response.status === 200) {
        dispatch(
            userLoginAction({
                ...response.data.result,
                isAuth: true,
                password: '',
            })
        );
    }
};

export const handleLoginUser =
	(user, history, redirectToCourses) => async (dispatch, getState) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: user,
        });

        if (response.status === 201) {
            localStorage.setItem('token', response.data.result);
            history.push(redirectToCourses);
        }
	};

export const handleSubmitRegistrationUser =
	(history, redirectURL, user) => async (dispatch, getState) => {
		try {
			const result = await axios({
				method: 'POST',
				url: 'http://localhost:3000/register',
				data: user,
			});

			if (result.status === 201) {
				history.push(redirectURL);
			}
		} catch (error) {
			alert('wrong password or email');
		}
	};

export const logout = () => async (dispatch, getState) => {
	const token = localStorage.getItem('token');
    const response = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/logout',
        headers: {
            Authorization: token,
        },
    });

    if (response.status === 200) {
        localStorage.clear();
        dispatch(
            userLoginAction({
                isAuth: false,
                name: '',
                email: '',
                token: '',
                role: '',
            })
        );
    }
};
