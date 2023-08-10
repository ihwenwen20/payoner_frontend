// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useUserApi from '@zustand/useUserApi';
import useAuthStore from '@zustand/authSlice';


// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CustomTextField from '@app/components/mui/text-field'

// ** Icon Imports
import Icon from '@app/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import useBgColor from '@app/context-hooks/useBgColor'
import { useSettings } from '@app/context-hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import HomeLayout from '@app/layouts/home/HomeLayout'
import BlankLayoutWithAppBar from '@app/layouts/BlankLayoutWithAppBar'

// ** Demo Imports
import FooterIllustrationsV2 from '@app/views/auth/FooterIllustrationsV2'

// ** Styled Components
import { toast } from 'react-hot-toast'

const LoginIllustration = styled('img')(({ theme }) => ({
	zIndex: 2,
	maxHeight: 680,
	marginTop: theme.spacing(12),
	marginBottom: theme.spacing(12),
	[theme.breakpoints.down(1540)]: {
		maxHeight: 550
	},
	[theme.breakpoints.down('lg')]: {
		maxHeight: 500
	}
}))

const RightWrapper = styled(Box)(({ theme }) => ({
	width: '100%',
	[theme.breakpoints.up('md')]: {
		maxWidth: 450
	},
	[theme.breakpoints.up('lg')]: {
		maxWidth: 600
	},
	[theme.breakpoints.up('xl')]: {
		maxWidth: 750
	}
}))

const LinkStyled = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
	'& .MuiFormControlLabel-label': {
		color: theme.palette.text.secondary
	}
}))

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(5).required()
})

const LoginPage = () => {
	const router = useRouter()
	const { loginUser } = useUserApi();
	const { saveNotif } = useAuthStore();

	const [formData, setFormData] = useState({
		password: '',
		email: ''
	})
	const [rememberMe, setRememberMe] = useState(true)
	const [showPassword, setShowPassword] = useState(false)

	// ** Hooks
	const theme = useTheme()
	const bgColors = useBgColor()
	const { settings } = useSettings()
	const hidden = useMediaQuery(theme.breakpoints.down('md'))

	// ** Vars
	const { skin } = settings

	const {
		control,
		setError,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData((prevFormData) => ({
	// 		...prevFormData,
	// 		[name]: value
	// 	}));
	// };

	const handleChange = prop => e => {
		setFormData({ ...formData, [prop]: e.target.value })
	}

	const handleClickShowPassword = () => {
		setShowPassword(showPassword ? false : true)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await loginUser(formData);
			// if (result) {
			// 	toast.success('Successfully!', {
			// 		duration: 3000
			// 	});
			// 	router.push('/dashboard');
			// }

			if (result) {
				await toast.promise(
					saveNotif(),
					// saveSettings(),
					{
						loading: 'Saving...',
						success: <b>Successfully!</b>,
						error: <b>Could not save.</b>,
					}
				);
				router.push('/dashboard');
			}

		} catch (error) {
			setError('email', {
				type: 'manual',
				message: 'Email or Password is invalid',
			});
			toast.error(`${error}`, {
				duration: 1500,
			});
		}
	};

	const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'


	// const saveSettings = (settings) => {
	// 	return new Promise((resolve, reject) => {
	// 		// Lakukan logika penyimpanan pengaturan di sini
	// 		// Misalnya, kirim permintaan ke server untuk menyimpan pengaturan
	// 		// Jika berhasil, panggil resolve()
	// 		// Jika gagal, panggil reject() dengan error yang sesuai
	// 		// Contoh sederhana:
	// 		if (Math.random() < 0.5) {
	// 			setTimeout(() => resolve(), 1000); // Berhasil
	// 		} else {
	// 			setTimeout(() => reject(new Error('Could not save settings.')), 1000); // Gagal
	// 		}
	// 	});
	// };

	return (
		<>
			<Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
				{!hidden ? (
					<Box
						sx={{
							flex: 1,
							display: 'flex',
							position: 'relative',
							alignItems: 'center',
							borderRadius: '20px',
							justifyContent: 'center',
							backgroundColor: 'customColors.bodyBg',
							margin: theme => theme.spacing(8, 0, 8, 8)
						}}
					>
						<LoginIllustration alt='login-illustration' src={`/images/pages/${imageSource}-${theme.palette.mode}.png`} />
						<FooterIllustrationsV2 />
					</Box>
				) : null}
				<RightWrapper>
					<Box
						sx={{
							p: [6, 12],
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Box sx={{ width: '100%', maxWidth: 400 }}>
							My App
							<Box sx={{ my: 6 }}>
								<Typography variant='h3' sx={{ mb: 1.5 }}>
									{`Welcome to ${themeConfig.templateName}! 👋🏻`}
								</Typography>
								<Typography sx={{ color: 'text.secondary' }}>
									Please sign-in to your account and start the adventure
								</Typography>
							</Box>
							<Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
								<Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
									Admin: <strong>admin@gmail.com</strong> / Pass: <strong>admin</strong>
								</Typography>
								<Typography variant='body2' sx={{ color: 'primary.main' }}>
									Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
								</Typography>
							</Alert>
							{/* <form noValidate autoComplete='off' onSubmit={handleSubmit}>
								<Box sx={{ mb: 4 }}>
									<CustomTextField
												fullWidth
												autoFocus
												label='Email'
												value={formData.email}
												onChange={handleChange}
											/>
								</Box>
								<Box sx={{ mb: 4 }}>
									<Controller
										name='email'
										control={control}
										rules={{ required: true }}
										render={({ field: { value, onChange, onBlur } }) => (
											<CustomTextField
												fullWidth
												autoFocus
												label='Email'
												value={value}
												onBlur={onBlur}
												onChange={onChange}
												error={Boolean(errors.email)}
												{...(errors.email && { helperText: errors.email.message })}
											/>
										)}
									/>
								</Box>
								<Box sx={{ mb: 1.5 }}>
									<Controller
										name='password'
										control={control}
										rules={{ required: true }}
										render={({ field: { value, onChange, onBlur } }) => (
											<CustomTextField
												fullWidth
												value={value}
												onBlur={onBlur}
												label='Password'
												onChange={onChange}
												id='auth-login-v2-password'
												error={Boolean(errors.password)}
												{...(errors.password && { helperText: errors.password.message })}
												type={showPassword ? 'text' : 'password'}
												InputProps={{
													endAdornment: (
														<InputAdornment position='end'>
															<IconButton
																edge='end'
																onMouseDown={e => e.preventDefault()}
																onClick={() => setShowPassword(!showPassword)}
															>
																<Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
															</IconButton>
														</InputAdornment>
													)
												}}
											/>
										)}
									/>
								</Box>
								<Box
									sx={{
										mb: 1.75,
										display: 'flex',
										flexWrap: 'wrap',
										alignItems: 'center',
										justifyContent: 'space-between'
									}}
								>
									<FormControlLabel
										label='Remember Me'
										control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
									/>
									<Typography component={LinkStyled} href='/auth/forgot-password'>
										Forgot Password?
									</Typography>
								</Box>
								<Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
									Login
								</Button>
								<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
									<Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
									<Typography href='/auth/register' component={LinkStyled}>
										Create an account
									</Typography>
								</Box>
								<Divider
									sx={{
										color: 'text.disabled',
										'& .MuiDivider-wrapper': { px: 6 },
										fontSize: theme.typography.body2.fontSize,
										my: theme => `${theme.spacing(6)} !important`
									}}
								>
									or
								</Divider>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
										<Icon icon='mdi:facebook' />
									</IconButton>
									<IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
										<Icon icon='mdi:twitter' />
									</IconButton>
									<IconButton
										href='/'
										component={Link}
										onClick={e => e.preventDefault()}
										sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
									>
										<Icon icon='mdi:github' />
									</IconButton>
									<IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
										<Icon icon='mdi:google' />
									</IconButton>
								</Box>
							</form> */}

							<form noValidate autoComplete='off' onSubmit={handleSubmit}>
								<Grid container spacing={5}>
									<Grid item xs={12}>
										<CustomTextField
											fullWidth
											type='email'
											rules={{ required: true }}
											label='Email'
											value={formData.email}
											onChange={handleChange('email')}
											placeholder='example@gmail.com'
											sx={{ mb: 4 }}
											error={Boolean(errors.email)}
											{...(errors.email && { helperText: errors.email.message })}
											// helperText={yupResolver(schema)}
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<Icon fontSize='1.25rem' icon='tabler:mail' />
													</InputAdornment>
												)
											}}
										/>
										<CustomTextField
											fullWidth
											rules={{ required: true }}
											label='Password'
											sx={{ mb: 4 }}
											placeholder='············'
											id='auth-register-password'
											value={formData.password}
											onChange={handleChange('password')}
											type={showPassword ? 'text' : 'password'}
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<Icon fontSize='1.25rem' icon='clarity:key-solid' />
													</InputAdornment>
												),
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton
															edge='end'
															onClick={handleClickShowPassword}
															onMouseDown={e => e.preventDefault()}
															aria-label='toggle password visibility'
														>
															<Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
														</IconButton>
													</InputAdornment>
												)
											}}
										/>
										<Box
											sx={{
												mb: 1.75,
												display: 'flex',
												flexWrap: 'wrap',
												alignItems: 'center',
												justifyContent: 'space-between'
											}}
										>
											<FormControlLabel
												label='Remember Me'
												control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
											/>
											<Typography component={LinkStyled} href='/auth/forgot-password'>
												Forgot Password?
											</Typography>
										</Box>
										<Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
											Login
										</Button>
										<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
											<Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
											<Typography href='/auth/register' component={LinkStyled}>
												Create an account
											</Typography>
										</Box>
										<Divider
											sx={{
												color: 'text.disabled',
												'& .MuiDivider-wrapper': { px: 6 },
												fontSize: theme.typography.body2.fontSize,
												my: theme => `${theme.spacing(6)} !important`
											}}
										>
											or
										</Divider>
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
												<Icon icon='mdi:facebook' />
											</IconButton>
											<IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
												<Icon icon='mdi:twitter' />
											</IconButton>
											<IconButton
												href='/'
												component={Link}
												onClick={e => e.preventDefault()}
												sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
											>
												<Icon icon='mdi:github' />
											</IconButton>
											<IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
												<Icon icon='mdi:google' />
											</IconButton>
										</Box>
									</Grid>
								</Grid>
							</form>
						</Box>
					</Box>
				</RightWrapper>
			</Box>
		</>
	)
}

// LoginPage.getLayout = page =>  <HomeLayout>{page}</HomeLayout>
LoginPage.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
LoginPage.guestGuard = true

export default LoginPage
