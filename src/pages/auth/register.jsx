// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useUserApi from '@zustand/useUserApi';
import { toast } from 'react-hot-toast'


// ** MUI Components
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

// ** Layout Import
import BlankLayoutWithAppBar from '@app/layouts/BlankLayoutWithAppBar'

// ** Hooks
import { useSettings } from '@app/context-hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from '@app/views/auth/FooterIllustrationsV2'

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
	zIndex: 2,
	maxHeight: 600,
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
	marginTop: theme.spacing(1.5),
	marginBottom: theme.spacing(1.75),
	'& .MuiFormControlLabel-label': {
		color: theme.palette.text.secondary
	}
}))

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(5).required()
})

const Register = () => {
	const router = useRouter()
	const { register } = useUserApi();
	// ** States

	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		companyName: '',
	})

	// ** Hooks
	const theme = useTheme()
	const { settings } = useSettings()
	const hidden = useMediaQuery(theme.breakpoints.down('md'))

	// ** Vars
	const { skin } = settings
const {
		control,
		setError,
		formState: { errors }
	} = useForm({
		// defaultValues,
		// formData,
		// setFormData,
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const handleChange = prop => event => {
		setFormData({ ...formData, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setShowPassword(showPassword ? false : true)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await register(formData);
			if (result) {
				// console.log('res',result.msg)
				toast.success(`Successfully! ${result.msg}`)
				router.push('/auth/login')
			}
		} catch (error) {
			// console.log(error);
			// setError(error);
			// setError('email', {
			// 	type: 'manual',
			// 	message: 'Email or Password is invalid'
			// })
			// toast.error(`${error}`)
			toast.error(error, {
				duration: 1500,
			});
		}
	};

	const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

	return (
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
					<RegisterIllustration
						alt='register-illustration'
						src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
					/>
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
								Adventure starts here 🚀
							</Typography>
							<Typography sx={{ color: 'text.secondary' }}>Make your app management easy and fun!</Typography>
						</Box>
						<form noValidate autoComplete='off' onSubmit={handleSubmit}>
							<Grid container spacing={5}>
								<Grid item xs={12}>
									<CustomTextField
										autoFocus
										fullWidth
										label='Full Name'
										value={formData.name}
										onChange={handleChange('name')}
										placeholder='John.doe'
										sx={{ mb: 4 }}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Icon fontSize='1.25rem' icon='tabler:user-circle' />
												</InputAdornment>
											)
										}}
									/>
									<CustomTextField
										fullWidth
										type='email'
										label='Email'
										value={formData.email}
										onChange={handleChange('email')}
										placeholder='example@gmail.com'
										sx={{ mb: 4 }}
										helperText='You can use letters, numbers & periods'
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
										type='number'
										label='Phone No.'
										value={formData.phone}
										onChange={handleChange('phone')}
										placeholder='WhatsApp'
										sx={{ mb: 4 }}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<Icon fontSize='1.25rem' icon='tabler:phone' />
												</InputAdornment>
											),
										}}
									/>
									<CustomTextField
										fullWidth
										label='Password'
										sx={{ mb: 4 }}
										value={formData.password}
										onChange={handleChange('password')}
										placeholder='············'
										id='auth-register-password'
										type={showPassword ? 'text' : 'password'}
										InputProps={{
											// startAdornment: (
											// 	<InputAdornment position='start'>
											// 		<Icon fontSize='1.25rem' icon='clarity:key-solid' />
											// 	</InputAdornment>
											// ),
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
									<CustomTextField
										fullWidth
										label='Confirm Password'
										placeholder='············'
										value={formData.confirmPassword}
										onChange={handleChange('confirmPassword')}
										sx={{ mb: 4 }}
										id='form-layouts-confirm-password'
										aria-describedby='form-layouts-confirm-password-helper'
										helperText='Make sure to type the same password as above'
										type={showPassword ? 'text' : 'password'}
										InputProps={{
											endAdornment: (
												<InputAdornment position='end'>
													<IconButton
														edge='end'
														onClick={handleClickShowPassword}
														onMouseDown={e => e.preventDefault()}
														aria-label='toggle password visibility'
													>
														<Icon
															fontSize='1.25rem'
															icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'}
														/>
													</IconButton>
												</InputAdornment>
											)
										}}
									/>
									<CustomTextField
									autoFocus
									fullWidth
									label='Company'
									value={formData.companyName}
									onChange={handleChange('companyName')}
									placeholder='Company Name'
									sx={{ mb: 4 }}
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Icon fontSize='1.25rem' icon='tabler:brand-edge' />
											</InputAdornment>
										)
									}}
								/>
								</Grid>

								<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox />}
									label={
										<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
											<Typography sx={{ color: 'text.secondary' }}>I agree to </Typography>
											<Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ ml: 1 }}>
												privacy policy & terms
											</Typography>
										</Box>
									}
								/>
								<Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
									Sign up
								</Button>
								<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
									<Typography sx={{ color: 'text.secondary', mr: 2 }}>Already have an account?</Typography>
									<Typography
										component={LinkStyled}
										href='/auth/login'
										sx={{ fontSize: theme.typography.body1.fontSize }}
									>
										Sign in instead
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
	)
}
Register.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
Register.guestGuard = true

export default Register
