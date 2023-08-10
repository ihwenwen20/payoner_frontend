import useAuthStore from './authSlice';

const URL = '/api/users';

const useUserApi = () => {
	const { setCredentials, logout } = useAuthStore();

	const handleError = async (response) => {
		const errorData = await response.json();
		if (response.ok) {
			return errorData;
		} else {
			// console.log(errorData.data.msg);
			throw new Error(errorData.data.msg);
		}
	};

	const login = async (data) => {
		try {
			const response = await fetch(`${URL}/signin`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const result = await response.json();
				setCredentials(result.data);
				return result;
			} else {
				throw await handleError(response);
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const logoutUser = async () => {
		try {
			const response = await fetch(`${URL}/logout`, {
				method: 'POST',
			});
			if (response.ok) {
				logout();
				return response;
			} else {
				throw await handleError(response);
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const register = async (data) => {
		try {
			const response = await fetch(`${URL}/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const result = await response.json();
				return result;
			} else {
				const errorData = await response.json();
				console.log(errorData.msg)
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const updateUser = async (data) => {
		try {
			const response = await fetch(`${URL}/profile`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				return response.json();
			} else {
				console.log(errorData.data.msg)
				throw new Error(errorData.data.msg);
			}
		} catch (error) {
			console.log('Error:', error);
			throw new Error('Update user failed');
		}
	};

	return {
		login,
		logoutUser,
		register,
		updateUser,
	};
};

export default useUserApi;
