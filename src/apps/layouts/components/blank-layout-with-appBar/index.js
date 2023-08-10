// ** Next Import
import Link from 'next/link'

// ** MUI Imports
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import { styled, useTheme } from '@mui/material/styles'

import {
	AppBar,
	Box,
	Button,
	Fab,
	Icon,
	IconButton,
	InputAdornment,
	Toolbar,
	Typography,
	styled,
	useTheme,
} from '@mui/material'

// ** Configs
// import themeConfig from 'src/configs/themeConfig'

// ** Hook
import { useSettings } from '@app/context-hooks/useSettings'
import CustomTextField from '@app/components/mui/text-field'
import ModeToggler from '@app/layouts/components/shared-components/ModeToggler'

const LinkStyled = styled(Link)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	marginRight: theme.spacing(8)
}))

import useAuthStore from '@zustand/authSlice';


const BlankLayoutAppBar = () => {
	const { userInfo, logout } = useAuthStore();

	// ** Hooks & Vars
	const theme = useTheme()
	const { settings, saveSettings } = useSettings()
	const { skin } = settings

	function logoutHandler(e) {
		e.preventDefault()
		logout()
	}

	return (
		<AppBar
			color='default'
			position='sticky'
			elevation={skin === 'bordered' ? 0 : 3}
			sx={{
				backgroundColor: 'background.paper',
				...(skin === 'bordered' && { borderBottom: `1px solid ${theme.palette.divider}` })
			}}
		>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					p: theme => `${theme.spacing(0, 6)} !important`,
					minHeight: `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<LinkStyled href='/'>
						My App
					</LinkStyled>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<CustomTextField
						fullWidth
						sx={{ m: 1 }}
						id='icons-start-adornment'
						placeholder='Search ...'
						InputProps={{
							startAdornment: <InputAdornment position='start'>
								<IconButton>
									<Icon fontSize='1.25rem' icon='tabler:search' />
								</IconButton>
							</InputAdornment>
						}}
					/>

					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, ml: 12, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
						>Home</Button>
					</Typography>
					<Typography
						component={LinkStyled}
						href='/about'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
						>About</Button>
					</Typography>
					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}>
							Pricing
						</Button>
					</Typography>
					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>

						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}>
							Services
						</Button>
					</Typography>
					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}>
							FAQs
						</Button>

					</Typography>
					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}>
							Help
						</Button>

					</Typography>
					<Typography
						component={LinkStyled}
						href='/'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}>
							Contact
						</Button>

					</Typography>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<ModeToggler settings={settings} saveSettings={saveSettings} />
					{/* {userInfo ? (
						<>
							<Typography
								component={LinkStyled}
								href='/'
								sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
							>
								<Button onClick={logoutHandler} color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
								>Logout</Button>
							</Typography>
							<Fab href='/dashboard' color='black-white' variant='extended' size='medium' sx={{ fontSize: theme.typography.body1.fontSize, ml: 2.5, fontWeight: 700, lineHeight: '24px' }}>
								My Account
							</Fab>

						</>
					) : (
						<>
							<Typography
								component={LinkStyled}
								href='/auth/login'
								sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
							>
								<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
								>Login</Button>
							</Typography>
							<Typography
								component={LinkStyled}
								href='/auth/register'
							>
								<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
								>Register</Button>
							</Typography>
						</>
					)} */}

					<Typography
						component={LinkStyled}
						href='/auth/login'
						sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
						>Login</Button>
					</Typography>
					<Typography
						component={LinkStyled}
						href='/auth/register'
					>
						<Button color='inherit' sx={{ fontSize: theme.typography.body1.fontSize, fontWeight: 700, lineHeight: '24px' }}
						>Register</Button>
					</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default BlankLayoutAppBar
