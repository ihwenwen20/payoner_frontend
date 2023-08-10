import { USER_LOGIN, USER_LOGOUT } from './constants';

export function userLogin(accessToken, refreshToken, name, email, role,) {
	return {
		type: USER_LOGIN,
		accessToken,
		refreshToken,
		name,
		email,
		role,
	};
}

export function userLogout() {
	localStorage.removeItem('userInfo');
	return {
		type: USER_LOGOUT,
	};
}
