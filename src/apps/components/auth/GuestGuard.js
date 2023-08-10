// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import useAuthStore from '@zustand/authSlice'

const GuestGuard = props => {
  const { children, fallback } = props
	const { userInfo } = useAuthStore();
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    // if (userInfo?.accessToken && window.localStorage.getItem('userInfo')) {
    //   router.replace('/')
    // }
    if (window.localStorage.getItem('userInfo')) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  if (userInfo || userInfo?.accessToken && userInfo !== null) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard