import axios from 'axios';
import { config } from '../configs';

const handleError = (error) => {
	// console.log('error:', error)
	// console.log(error.response.data.data.msg)
	// const defaultErr = {
	// 	message: error.response.data.data.msg,
	// 	code: error.response.data.data.code,
	// }

	const originalRequest = error.config;
	if (error.response.data.msg === 'jwt expired' || error.response.data.msg === 'jwt malformed') {
		originalRequest._retry = true;
		const session = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};
		console.log('session', session);

		return axios
			.get(`${config.BASE_URL}/refresh-token/${session.refreshToken}/${session.email}`)
			.then((res) => {
				console.log('res', res);
				localStorage.setItem(
					'userInfo',
					JSON.stringify({
						...session,
						accessToken: res.data.data.accessToken,
					})
				);
				originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`;

				console.log('originalRequest',originalRequest);

				return axios(originalRequest);
			})
			.catch((err) => {
				window.location.href = '/auth/login';
				localStorage.removeItem('userInfo');
			});
	}

	return error;
	// return defaultErr;
};

export default handleError;
