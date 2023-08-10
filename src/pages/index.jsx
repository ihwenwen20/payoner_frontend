import { useEffect } from 'react'
import Link from 'next/link'
import useAuthStore from '@zustand/authSlice';
import BlankLayoutWithAppBar from '@app/layouts/BlankLayoutWithAppBar'
import { useRouter } from 'next/router'

const Home = () => {
	const router = useRouter();
	const { userInfo } = useAuthStore();

	useEffect(() => {
		if (userInfo?.accessToken && router.route === '/') {
			router.replace('/dashboard');
		}
	}, [userInfo, router]);

	return (
		<div>
			<h1>Welcome to My App</h1>
			<Link href={'/dashboard'}>
				<button>My Account</button>
			</Link>
			<Link href={'/auth/login'}>
				<button>Login</button>
			</Link>
			<Link href={'/auth/register'}>
				<button>Register</button>
			</Link>
		</div>
	);
};

Home.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
Home.guestGuard = true

export default Home;