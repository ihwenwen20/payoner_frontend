// ** React Imports
import { createContext, useEffect } from 'react'
import { create } from 'zustand'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Defaults
const defaultProvider = {
	user: null,
	loading: true,
	setUser: () => null,
	setLoading: () => null,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	register: () => Promise.resolve()

}

const AuthContext = createContext(defaultProvider)

// ** Zustand Store
const useAuthStore = create((set) => ({
	user: null,
	loading: true,
	setUser: (user) => set({ user }),
	setLoading: (loading) => set({ loading })
}))

const AuthProvider = ({ children }) => {
	// ** Zustand
	const setUser = useAuthStore((state) => state.setUser)
	const setLoading = useAuthStore((state) => state.setLoading)

	// ** Hooks
	const router = useRouter()
	useEffect(() => {
		const initAuth = async () => {
			const storedToken = window.localStorage.getItem('token')
			if (storedToken) {
				setLoading(true)
				try {
					// const response = await axios.get('/api/me', {
					const response = await axios.get('https://dummyjson.com/auth/login', {
						headers: {
							Authorization: `Bearer ${storedToken}`
						}
					})
					setUser(response.data.userData)
				} catch (error) {
					localStorage.removeItem('userData')
					localStorage.removeItem('refreshToken')
					localStorage.removeItem('token')
					setUser(null)
					if (!router.pathname.includes('login')) {
						router.replace('/login')
					}
				} finally {
					setLoading(false)
				}
			} else {
				setLoading(false)
			}
		}
		initAuth()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleLogin = () => {
		axios
			// .post('/api/login')
			.post('https://dummyjson.com/auth/login', {})
			.then(async response => {
				const returnUrl = router.query.returnUrl
				setUser(response.data.userData)
				const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
				router.replace(redirectURL)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleLogout = () => {
		setUser(null)
		window.localStorage.removeItem('userData')
		window.localStorage.removeItem('token')
		router.push('/login')
	}
	const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

	const values = {
		user: useAuthStore((state) => state.user),
		loading: useAuthStore((state) => state.loading),
		setUser,
		setLoading,
		login: handleLogin,
		logout: handleLogout,
    register: handleRegister
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider, useAuthStore }
