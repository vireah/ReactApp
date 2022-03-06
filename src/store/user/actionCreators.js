import { user_login } from './actionTypes';

export const userLoginAction = (user) => ({
	type: user_login,
	user: user,
});
