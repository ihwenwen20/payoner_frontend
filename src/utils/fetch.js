import axios from 'axios';
import handleError from './handleError';
import { config } from '../configs';

export async function getData(url, params) {
	try {
		const { accessToken } = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};

		const res = await axios.get(`${config.BASE_URL}${url}`, {
			params,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		// console.log('res', res)
		return res;
	} catch (err) {
		return handleError(err);
	}
}

export async function postData(url, payload, formData) {
	try {
		const { accessToken } = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};

		const res = await axios.post(`${config.BASE_URL}${url}`, payload, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': formData ? 'multipart/form-data' : 'application/json',
			},
		});
		return res;
	} catch (err) {
		return handleError(err);
	}
}

export async function putData(url, payload) {
	try {
		const { accessToken } = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};

		const res = await axios.put(`${config.BASE_URL}${url}`, payload, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return res;
	} catch (err) {
		return handleError(err);
	}
}

export async function deleteData(url) {
	try {
		const { accessToken } = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};

		const res = await axios.delete(`${config.BASE_URL}${url}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return res;
	} catch (err) {
		return handleError(err);
	}
}
