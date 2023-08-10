// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import useAuthStore from '@zustand/authSlice'

const AuthGuard = props => {
  const { children, fallback } = props
	const { userInfo } = useAuthStore();
  const router = useRouter()
  useEffect(
    () => {
      if (!router.isReady) {
        return
      }
      if (!userInfo || !userInfo?.accessToken && !window.localStorage.getItem('userInfo')) {
        if (router.asPath !== '/') {
          router.replace({
            pathname: '/auth/login',
            query: { returnUrl: router.asPath }
          })
        } else {
          router.replace('/auth/login')
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )
  if (!userInfo) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard