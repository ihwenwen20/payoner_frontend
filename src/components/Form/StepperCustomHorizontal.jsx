// ** React Imports
import { Fragment, forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiStep from '@mui/material/Step'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import DatePickerWrapper from '@app/styles/libs/react-datepicker'
import { en, id, es } from 'date-fns/locale'

// ** Icon Imports
import Icon from '@components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomAvatar from '@components/mui/avatar'
import CustomTextField from '@components/mui/text-field'

// ** Hook Import
import { useSettings } from '@app/context-hooks/useSettings'

// ** Util Import
import { hexToRGBA } from '@app/utils/hex-to-rgba'

// ** Styled Component
import StepperWrapper from '@app/styles/mui/stepper'

const steps = [
	{
		icon: 'tabler:home',
		title: 'Account Details',
		subtitle: 'Enter your Account Details'
	},
	{
		icon: 'tabler:user',
		title: 'Personal Info',
		subtitle: 'Setup Information'
	},
	// {
	// 	icon: 'tabler:link',
	// 	title: 'Social Links',
	// 	subtitle: 'Add Social Links'
	// }
]

const Step = styled(MuiStep)(({ theme }) => ({
	paddingLeft: theme.spacing(4),
	paddingRight: theme.spacing(4),
	'&:first-of-type': {
		paddingLeft: 0
	},
	'&:last-of-type': {
		paddingRight: 0
	},
	'& .MuiStepLabel-iconContainer': {
		display: 'none'
	},
	'& .step-subtitle': {
		color: `${theme.palette.text.disabled} !important`
	},
	'& + svg': {
		color: theme.palette.text.disabled
	},
	'&.Mui-completed .step-title': {
		color: theme.palette.text.disabled
	},
	'&.Mui-completed + svg': {
		color: theme.palette.primary.main
	},
	[theme.breakpoints.down('md')]: {
		padding: 0,
		':not(:last-of-type)': {
			marginBottom: theme.spacing(6)
		}
	}
}))

const CustomInput = forwardRef((props, ref) => {
	return <CustomTextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const StepperCustomHorizontal = () => {
	// ** States
	const [google, setGoogle] = useState('')
	const [twitter, setTwitter] = useState('')
	const [facebook, setFacebook] = useState('')
	const [linkedIn, setLinkedIn] = useState('')
	const [firstName, setFirstName] = useState('')
	const [activeStep, setActiveStep] = useState(0)
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		companyName: '',
		role: '',
		avatar: '',
		gender: '',
		birthday: new Date(),
		status: '',
	})

	// ** Hooks & Var
	const { settings } = useSettings()
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
	const { direction } = settings

	// Handle Stepper
	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
		if (activeStep === steps.length - 1) {
			toast.success('Form Submitted')
		}
	}

	const handleReset = () => {
		setGoogle('')
		setTwitter('')
		setFacebook('')
		setLinkedIn('')
		setFirstName('')
		setActiveStep(0)
		// setState({ ...state, password: '', password2: '' })
		// setFormData({ ...formData, password: '', confirmPassword: '', birthday:'' })
	}

	const handleChange = prop => event => {
		setFormData({ ...formData, [prop]: event.target.value })
	}

	const handleDateChange = (date) => {
		setFormData({ ...formData, birthday: date });
	};

	const handleClickShowPassword = () => {
		// setState({ ...state, showPassword: !state.showPassword })
		setShowPassword(showPassword ? false : true)
	}

	const getStepContent = step => {
		switch (step) {
			case 0:
				return (
					<>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								fullWidth
								label='Full Name'
								value={formData.name}
								onChange={handleChange('name')}
								placeholder='Example: Ciro Alves'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								fullWidth
								type='email'
								label='Email'
								value={formData.email}
								onChange={handleChange('email')}
								placeholder='example@gmail.com'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								fullWidth
								label='Password'
								value={formData.password}
								onChange={handleChange('password')}
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
												<Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								fullWidth
								value={formData.confirmPassword}
								label='Confirm Password'
								onChange={handleChange('confirmPassword')}
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
												<Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						</Grid>
					</>
				)
			case 1:
				return (
					<Fragment key={step}>
						{/* < Grid item xs={12} sm={6} >
							<CustomTextField
								fullWidth
								label='Full Name'
								placeholder='Bambang Pamungkas'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
						</Grid > */}
						<Grid item xs={12} sm={6}>
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
						<Grid item xs={12} sm={6}>
							<DatePickerWrapper>
								<DatePicker
									selected={formData.birthday}
									dateFormat='dd MMMM yyyy'
									locale={id}
									showYearDropdown
									showMonthDropdown
									placeholderText='DD/MM/YYYY'
									customInput={<CustomInput />}
									onChange={handleDateChange}
								/>
							</DatePickerWrapper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								fullWidth
								type='number'
								label='Phone No.'
								value={formData.phone}
								onChange={handleChange('phone')}
								placeholder='085x-xxxx-xx90'
								sx={{ mb: 4 }}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<Icon fontSize='1.25rem' icon='tabler:phone' />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								select
								fullWidth
								label='Select Role'
								SelectProps={{
									value: formData.role,
									displayEmpty: true,
									onChange: handleChange('role')
								}}
							>
								<MenuItem value='admin'>Admin</MenuItem>
								<MenuItem value='company'>Company</MenuItem>
								<MenuItem value='owner'>Owner</MenuItem>
								<MenuItem value='client'>Client</MenuItem>
							</CustomTextField>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								select
								fullWidth
								label='Select Status'
								id='stepper-custom-horizontal-personal-select'
								SelectProps={{
									value: formData.status,
									onChange: handleChange('status')
								}}
							>
								<MenuItem value='pending'>Pending</MenuItem>
								<MenuItem value='active'>Active</MenuItem>
								<MenuItem value='non active'>Inactive</MenuItem>
							</CustomTextField>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomTextField
								rows={4}
								fullWidth
								value={formData.address}
								onChange={handleChange('address')}
								multiline
								label='Address'
								aria-describedby='validation-basic-textarea'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl>
								<FormLabel >Gender</FormLabel>
								<RadioGroup row aria-label='gender' name='customized-radios'>
									<FormControlLabel value='male' control={<Radio />} label='Male' />
									<FormControlLabel value='female' control={<Radio />} label='Female' />
								</RadioGroup>
							</FormControl>
						</Grid>
					</Fragment>
				)
			// case 2:
			// 	return (
			// 		<Fragment key={step}>
			// 			< Grid item xs={12} sm={6} >
			// 				<CustomTextField
			// 					fullWidth
			// 					label='Twitter'
			// 					value={twitter}
			// 					onChange={e => setTwitter(e.target.value)}
			// 					placeholder='https://twitter.com/carterLeonard'
			// 				/>
			// 			</Grid >
			// 			<Grid item xs={12} sm={6}>
			// 				<CustomTextField
			// 					fullWidth
			// 					label='Facebook'
			// 					value={facebook}
			// 					onChange={e => setFacebook(e.target.value)}
			// 					placeholder='https://facebook.com/carterLeonard'
			// 				/>
			// 			</Grid>
			// 			<Grid item xs={12} sm={6}>
			// 				<CustomTextField
			// 					fullWidth
			// 					label='Google+'
			// 					value={google}
			// 					onChange={e => setGoogle(e.target.value)}
			// 					placeholder='https://plus.google.com/carterLeonard'
			// 				/>
			// 			</Grid>
			// 			<Grid item xs={12} sm={6}>
			// 				<CustomTextField
			// 					fullWidth
			// 					label='LinkedIn'
			// 					value={linkedIn}
			// 					onChange={e => setLinkedIn(e.target.value)}
			// 					placeholder='https://linkedin.com/carterLeonard'
			// 				/>
			// 			</Grid>
			// 		</Fragment>
			// 	)
			default:
				return 'Unknown Step'
		}
	}

	const renderContent = () => {
		if (activeStep === steps.length) {
			return (
				<>
					<Typography>All steps are completed!</Typography>
					<Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
						<Button variant='contained' onClick={handleReset}>
							Reset
						</Button>
					</Box>
				</>
			)
		} else {
			return (
				<form onSubmit={e => e.preventDefault()}>
					<Grid container spacing={5}>
						<Grid item xs={12}>
							<Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
								{steps[activeStep].title}
							</Typography>
							<Typography variant='caption' component='p'>
								{steps[activeStep].subtitle}
							</Typography>
						</Grid>
						{getStepContent(activeStep)}
						<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Button variant='tonal' color='secondary' disabled={activeStep === 0} onClick={handleBack}>
								Back
							</Button>
							<Button variant='contained' onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Submit' : 'Next'}
							</Button>
						</Grid>
					</Grid>
				</form>
			)
		}
	}

	return (
		<Card>
			<CardContent>
				<StepperWrapper>
					<Stepper
						activeStep={activeStep}
						connector={
							!smallScreen ? <Icon icon={direction === 'ltr' ? 'tabler:chevron-right' : 'tabler:chevron-left'} /> : null
						}
					>
						{steps.map((step, index) => {
							const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

							return (
								<Step key={index}>
									<StepLabel StepIconComponent={StepperCustomDot}>
										<div className='step-label'>
											<RenderAvatar
												variant='rounded'
												{...(activeStep >= index && { skin: 'light' })}
												{...(activeStep === index && { skin: 'filled' })}
												{...(activeStep >= index && { color: 'primary' })}
												sx={{
													...(activeStep === index && { boxShadow: theme => theme.shadows[3] }),
													...(activeStep > index && { color: theme => hexToRGBA(theme.palette.primary.main, 0.4) })
												}}
											>
												<Icon icon={step.icon} />
											</RenderAvatar>
											<div>
												<Typography className='step-title'>{step.title}</Typography>
												<Typography className='step-subtitle'>{step.subtitle}</Typography>
											</div>
										</div>
									</StepLabel>
								</Step>
							)
						})}
					</Stepper>
				</StepperWrapper>
			</CardContent>
			<Divider sx={{ m: '0 !important' }} />
			<CardContent>{renderContent()}</CardContent>
		</Card>
	)
}

export default StepperCustomHorizontal
