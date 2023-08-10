import { USER_LOGIN, USER_LOGOUT } from './constants';

let initialState = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: { accessToken: null, refreshToken: null, name: null, email: null, role: null, };

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN:
			return {
				accessToken: action.accessToken,
				refreshToken: action.refreshToken,
				name: action.name,
				email: action.email,
				role: action.role,
			};

		case USER_LOGOUT:
			return { accessToken: null, refreshToken: null, email: null, name: null, role: null, };

		default:
			return state;
	}
}
