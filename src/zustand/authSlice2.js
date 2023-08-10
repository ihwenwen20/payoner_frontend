import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useAuthStore = create(
	devtools(
		persist((set) => ({
			userInfo:
				typeof window !== 'undefined' && localStorage.getItem('userInfo')
					? JSON.parse(localStorage.getItem('userInfo'))
					: null,
			// userInfo: {},
			isLoading: true,
			setError: null,
			login: async (email, password) => {
				try {
					setIsLoading(false);
					setError(null);
					const response = await new Promise((resolve) =>
						setTimeout(
							() =>
								resolve({
									ok: true,
									data: {},
								}),
							1000
						)
					);

					if (response.ok) {
						const result = response.data;
						setCredentials(result);
						return result;
					} else {
						const errorData = await response.json();
						setError(errorData.data.msg);
						throw new Error(errorData.data.msg);
					}
				} catch (error) {
					setError('Login failed');
					throw error;
				} finally {
					setIsLoading(false);
				}
			},
			logout: () => {
				set(() => ({ userInfo: null }));
				localStorage.removeItem('userInfo');
				localStorage.removeItem('auth')
			},
			setIsLoading: (isLoading) => {
				set(() => ({ isLoading }));
			},
			setError: (error) => {
				set(() => ({ error }));
			},
			setCredentials: (data) => {
				set(() => ({ userInfo: data }));
				localStorage.setItem('userInfo', JSON.stringify(data));
			},
		}), {
			name: 'auth',
		})
	)
);

export default useAuthStore;
