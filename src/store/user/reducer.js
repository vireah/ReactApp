import { userLoginAction } from './actionCreators';
import { user_login } from './actionTypes';

const initialValue = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
};

export function userReducer(
	state = initialValue,
	action = { userLoginAction }
) {
	if (action.type === user_login) {
		return {
			...state,
			user: action.user,
		};
	}
	return state;
}
