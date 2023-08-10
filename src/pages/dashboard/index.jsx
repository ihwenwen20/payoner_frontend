import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

import useAuthStore from '@zustand/authSlice';

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const LoadingComponent = () => <p>Loading...</p>;

const Dashboard = () => {
	const router = useRouter();
  const { userInfo, logout, isLoading, setLoading } = useAuthStore();

  useEffect(() => {
    if (userInfo?.accessToken && router.route === '/') {
      router.replace('/dashboard');
    } else if (!userInfo?.accessToken) {
      logout();
      router.replace('/');
    } else {
      setLoading(false);
    }
  }, [userInfo, router, logout, setLoading]);

  if (isLoading) {
    return <LoadingComponent />;
  }

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					{/* <h1 className="title">Dashboard</h1> */}
					<h2 className="subtitle">
						Welcome Back, <strong>{userInfo?.name}! 🚀</strong>
					</h2>
					<Card>
						{/* <h2 className="subtitle">
							Welcome Back <strong>{userInfo.name}!</strong>
						</h2> */}
						<CardHeader title='Kick start your project 🚀'></CardHeader>
						<CardContent>
							<Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
							<Typography>
								Please make sure to read our Template Documentation to understand where to go from here and how to use our
								template.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardHeader title='ACL and JWT 🔒'></CardHeader>
						<CardContent>
							<Typography sx={{ mb: 2 }}>
								Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
							</Typography>
							<Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default Dashboard
