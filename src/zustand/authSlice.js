import { create } from 'zustand';

const useAuthStore = create((set) => ({
	userInfo: typeof window !== 'undefined' && localStorage.getItem('userInfo')
		? JSON.parse(localStorage.getItem('userInfo'))
		: null,
	login: (data) => {
		set(() => ({ userInfo: data }));
		localStorage.setItem('userInfo', JSON.stringify(data));
	},
	logout: () => {
		set(() => ({ userInfo: null }));
		localStorage.removeItem('userInfo');
	},
	isLoading: true,
	setLoading: (isLoading) => {
		set(() => ({ isLoading }));
	},
	saveNotif: async (settings) => {
		try {
			await new Promise((resolve, reject) =>
				setTimeout(() => resolve(), 1000)
			);
			return;
		} catch (error) {
			throw error;
		}
	},
	getAccessToken: () => {
    const userInfo = typeof window !== 'undefined' && localStorage.getItem('userInfo');
    return userInfo ? userInfo.accessToken : null;
  },
}));

export default useAuthStore;
