// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Icon Imports
import Icon from '@app/components/icon'

import DatePicker from 'react-datepicker'
import DatePickerWrapper from '@app/styles/libs/react-datepicker'
// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomTextField from '@app/components/mui/text-field'

// ** Styled Components
import StepperWrapper from '@app/styles/mui/stepper'

const CustomInput = forwardRef((props, ref) => {
	return <CustomTextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const steps = [
	{
		title: 'Account Details',
		subtitle: 'Enter your Account Details'
	},
	{
		title: 'Personal Info',
		subtitle: 'Setup Information'
	},
	{
		title: 'Social Links',
		subtitle: 'Add Social Links'
	}
]

const defaultAccountValues = {
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
}

const defaultPersonalValues = {
	country: '',
	language: [],
	'last-name': '',
	'first-name': ''
}

const defaultSocialValues = {
	google: '',
	twitter: '',
	facebook: '',
	linkedIn: ''
}

const accountSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([yup.ref('password'), ''], 'Password and Confirm Password do not match'),
	companyName: yup.string().required(),
	phone: yup.number().required(),
	role: yup.string().required(),
	gender: yup.string().required(),
	birthday: yup.string().required(),
	status: yup.string().required(),
	avatar: yup.string().required(),
})


const personalSchema = yup.object().shape({
	country: yup.string().required(),
	'last-name': yup.string().required(),
	'first-name': yup.string().required(),
	language: yup.array().min(1).required()
})

const socialSchema = yup.object().shape({
	google: yup.string().required(),
	twitter: yup.string().required(),
	facebook: yup.string().required(),
	linkedIn: yup.string().required()
})

const StepperLinearWithValidation = () => {
	// ** States
	const [activeStep, setActiveStep] = useState(0)

	const [state, setState] = useState({
		password: '',
		showPassword: false,
	})

	// ** Hooks
	const {
		reset: accountReset,
		control: accountControl,
		handleSubmit: handleAccountSubmit,
		formState: { errors: accountErrors }
	} = useForm({
		defaultValues: defaultAccountValues,
		resolver: yupResolver(accountSchema)
	})

	const {
		reset: personalReset,
		// control: accountControl,
		handleSubmit: handlePersonalSubmit,
		formState: { errors: personalErrors }
	} = useForm({
		defaultValues: defaultPersonalValues,
		resolver: yupResolver(personalSchema)
	})

	const {
		reset: socialReset,
		control: socialControl,
		handleSubmit: handleSocialSubmit,
		formState: { errors: socialErrors }
	} = useForm({
		defaultValues: defaultSocialValues,
		resolver: yupResolver(socialSchema)
	})

	// Handle Stepper
	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
		socialReset({ google: '', twitter: '', facebook: '', linkedIn: '' })
		accountReset({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			phone: '',
			companyName: '',
			role: '',
			avatar: '',
			gender: '',
			birthday: '',
			status: '',
		})
		// personalReset({ country: '', language: [], 'last-name': '', 'first-name': '' })
	}

	const onSubmit = () => {
		setActiveStep(activeStep + 1)
		// setActiveStep(prevActiveStep => prevActiveStep + 1)
		if (activeStep === steps.length - 1) {
			toast.success('Form Submitted')
		}
	}

	// Handle Password
	const handleClickShowPassword = () => {
		setState({ ...state, showPassword: !state.showPassword })
	}

	const getStepContent = step => {
		switch (step) {
			case 0:
				return (
					<form key={0} onSubmit={handleAccountSubmit(onSubmit)}>
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
									{steps[0].title}
								</Typography>
								<Typography variant='caption' component='p'>
									{steps[0].subtitle}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='name'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Full Name'
											onChange={onChange}
											placeholder='Example: Ciro Alves'
											error={Boolean(accountErrors.name)}
											{...(accountErrors.name && { helperText: 'Please provide all required fields' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='email'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											type='email'
											value={value}
											label='Email'
											onChange={onChange}
											error={Boolean(accountErrors.email)}
											placeholder='example@gmail.com'
											aria-describedby='stepper-linear-account-email'
											{...(accountErrors.email && { helperText: 'Please provide all required fields' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='password'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Password'
											onChange={onChange}
											error={Boolean(accountErrors.password)}
											type={state.showPassword ? 'text' : 'password'}
											{...(accountErrors.password && { helperText: 'Please provide all required fields' })}
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton
															edge='end'
															onClick={handleClickShowPassword}
															onMouseDown={e => e.preventDefault()}
															aria-label='toggle password visibility'
														>
															<Icon fontSize='1.25rem' icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
														</IconButton>
													</InputAdornment>
												)
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='confirmPassword'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											onChange={onChange}
											label='Confirm Password'
											type={state.showPassword ? 'text' : 'password'}
											error={Boolean(accountErrors.confirmPassword)}
											{...(accountErrors.confirmPassword && {
												helperText: 'Please provide all required fields'
											})}
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton
															edge='end'
															onMouseDown={e => e.preventDefault()}
															aria-label='toggle password visibility'
															onClick={handleClickShowPassword}
														>
															<Icon fontSize='1.25rem' icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
														</IconButton>
													</InputAdornment>
												)
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='companyName'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Company'
											onChange={onChange}
											placeholder='Company Name'
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<Icon fontSize='1.25rem' icon='tabler:brand-edge' />
													</InputAdornment>
												)
											}}
											error={Boolean(accountErrors.companyName)}
											{...(accountErrors.companyName && { helperText: 'Please provide all required fields' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='birthday'
									control={accountControl} rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<DatePickerWrapper>
											<DatePicker
												selected={value}
												dateFormat='dd MMMM yyyy'
												showYearDropdown
												showMonthDropdown
												onChange={e => onChange(e)}
												placeholderText='DD/MM/YYYY'
												customInput={
													<CustomInput
														value={value}
														onChange={onChange}
														label='Date of Birth'
														error={Boolean(accountErrors.birthday)}
														{...(accountErrors.birthday && { helperText: 'This field is required' })}
													/>
												}
											/>
										</DatePickerWrapper>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='role'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											select
											fullWidth
											label='Select Role'
											defaultValue=''
											onChange={onChange}
											error={Boolean(accountErrors.role)}
											{...(accountErrors.role && { helperText: 'This field is required' })}
										// SelectProps={{
										// 	multiple: true,
										// 	value: Array.isArray(value) ? value : [],
										// 	onChange: e => onChange(e)
										// }}
										>
											<MenuItem value='admin'>Admin</MenuItem>
											<MenuItem value='company'>Company</MenuItem>
											<MenuItem value='owner'>Owner</MenuItem>
											<MenuItem value='client'>Client</MenuItem>
										</CustomTextField>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='status'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											select
											fullWidth
											value={value}
											defaultValue=''
											label='Select Status'
											onChange={onChange}
											error={Boolean(accountErrors.status)}
											{...(accountErrors.status && { helperText: 'This field is required' })}
										>
											<MenuItem value='pending'>Pending</MenuItem>
											<MenuItem value='active'>Active</MenuItem>
											<MenuItem value='non active'>Inactive</MenuItem>
										</CustomTextField>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									name='address'
									control={accountControl}
									rules={{ required: true }}
									render={({ field }) => (
										<CustomTextField
											rows={4}
											fullWidth
											multiline
											{...field}
											label='Address'
											error={Boolean(accountErrors.address)}
											{...(accountErrors.address && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl error={Boolean(accountErrors.gender)}>
									<FormLabel>Gender</FormLabel>
									<Controller
										name='gender'
										control={accountControl}
										rules={{ required: true }}
										render={({ field }) => (
											<RadioGroup row {...field} aria-label='gender'>
												<FormControlLabel
													value='male'
													label='Male'
													sx={accountErrors.gender ? { color: 'error.main' } : null}
													control={<Radio sx={accountErrors.gender ? { color: 'error.main' } : null} />}
												/>
												<FormControlLabel
													value='female'
													label='Female'
													sx={accountErrors.gender ? { color: 'error.main' } : null}
													control={<Radio sx={accountErrors.gender ? { color: 'error.main' } : null} />}
												/>
											</RadioGroup>
										)}
									/>
									{accountErrors.gender && (
										<FormHelperText
											id='validation-basic-radio'
											sx={{ mx: 0, color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }}
										>
											This field is required
										</FormHelperText>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='tonal' color='secondary' disabled>
									Back
								</Button>
								<Button type='submit' variant='contained'>
									Next
								</Button>
							</Grid>
						</Grid>
					</form>
				)
			case 1:
				return (
					<form key={1} onSubmit={handleAccountSubmit(onSubmit)}>
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
									{steps[1].title}
								</Typography>
								<Typography variant='caption' component='p'>
									{steps[1].subtitle}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='companyName'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Company'
											onChange={onChange}
											placeholder='Company Name'
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<Icon fontSize='1.25rem' icon='tabler:brand-edge' />
													</InputAdornment>
												)
											}}
											error={Boolean(accountErrors.companyName)}
											{...(accountErrors.companyName && { helperText: 'Please provide all required fields' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='birthday'
									control={accountControl} rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<DatePickerWrapper>
											<DatePicker
												selected={value}
												dateFormat='dd MMMM yyyy'
												showYearDropdown
												showMonthDropdown
												onChange={e => onChange(e)}
												placeholderText='DD/MM/YYYY'
												customInput={
													<CustomInput
														value={value}
														onChange={onChange}
														label='Date of Birth'
														error={Boolean(accountErrors.birthday)}
														{...(accountErrors.birthday && { helperText: 'This field is required' })}
													/>
												}
											/>
										</DatePickerWrapper>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='role'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											select
											fullWidth
											label='Select Role'
											defaultValue=''
											onChange={onChange}
											error={Boolean(accountErrors.role)}
											{...(accountErrors.role && { helperText: 'This field is required' })}
										// SelectProps={{
										// 	multiple: true,
										// 	value: Array.isArray(value) ? value : [],
										// 	onChange: e => onChange(e)
										// }}
										>
											<MenuItem value='admin'>Admin</MenuItem>
											<MenuItem value='company'>Company</MenuItem>
											<MenuItem value='owner'>Owner</MenuItem>
											<MenuItem value='client'>Client</MenuItem>
										</CustomTextField>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='status'
									control={accountControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											select
											fullWidth
											value={value}
											label='Select Status'
											defaultValue=''
											onChange={onChange}
											error={Boolean(accountErrors.status)}
											{...(accountErrors.status && { helperText: 'This field is required' })}
										>
											<MenuItem value='pending'>Pending</MenuItem>
											<MenuItem value='active'>Active</MenuItem>
											<MenuItem value='non active'>Inactive</MenuItem>
										</CustomTextField>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Controller
									name='address'
									control={accountControl}
									rules={{ required: true }}
									render={({ field }) => (
										<CustomTextField
											rows={4}
											fullWidth
											multiline
											{...field}
											label='Address'
											error={Boolean(accountErrors.address)}
											{...(accountErrors.address && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl error={Boolean(accountErrors.gender)}>
									<FormLabel>Gender</FormLabel>
									<Controller
										name='gender'
										control={accountControl}
										rules={{ required: true }}
										render={({ field }) => (
											<RadioGroup row {...field} aria-label='gender'>
												<FormControlLabel
													value='male'
													label='Male'
													sx={accountErrors.gender ? { color: 'error.main' } : null}
													control={<Radio sx={accountErrors.gender ? { color: 'error.main' } : null} />}
												/>
												<FormControlLabel
													value='female'
													label='Female'
													sx={accountErrors.gender ? { color: 'error.main' } : null}
													control={<Radio sx={accountErrors.gender ? { color: 'error.main' } : null} />}
												/>
											</RadioGroup>
										)}
									/>
									{accountErrors.gender && (
										<FormHelperText
											id='validation-basic-radio'
											sx={{ mx: 0, color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }}
										>
											This field is required
										</FormHelperText>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='tonal' color='secondary' onClick={handleBack}>
									Back
								</Button>
								<Button type='submit' variant='contained'>
									Next
								</Button>
							</Grid>
						</Grid>
					</form>
				)
			case 2:
				return (
					<form key={2} onSubmit={handleSocialSubmit(onSubmit)}>
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
									{steps[2].title}
								</Typography>
								<Typography variant='caption' component='p'>
									{steps[2].subtitle}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='twitter'
									control={socialControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Twitter'
											onChange={onChange}
											error={Boolean(socialErrors.twitter)}
											placeholder='https://twitter.com/carterLeonard'
											aria-describedby='stepper-linear-social-twitter'
											{...(socialErrors.twitter && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='facebook'
									control={socialControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Facebook'
											onChange={onChange}
											error={Boolean(socialErrors.facebook)}
											placeholder='https://facebook.com/carterLeonard'
											aria-describedby='stepper-linear-social-facebook'
											{...(socialErrors.facebook && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='google'
									control={socialControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='Google+'
											onChange={onChange}
											error={Boolean(socialErrors.google)}
											aria-describedby='stepper-linear-social-google'
											placeholder='https://plus.google.com/carterLeonard'
											{...(socialErrors.google && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Controller
									name='linkedIn'
									control={socialControl}
									rules={{ required: true }}
									render={({ field: { value, onChange } }) => (
										<CustomTextField
											fullWidth
											value={value}
											label='LinkedIn'
											onChange={onChange}
											error={Boolean(socialErrors.linkedIn)}
											placeholder='https://linkedin.com/carterLeonard'
											aria-describedby='stepper-linear-social-linkedIn'
											{...(socialErrors.linkedIn && { helperText: 'This field is required' })}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='tonal' color='secondary' onClick={handleBack}>
									Back
								</Button>
								<Button type='submit' variant='contained'>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				)
			default:
				return null
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
			return getStepContent(activeStep)
		}
	}

	return (
		<Card>
			<CardContent>
				<StepperWrapper>
					<Stepper activeStep={activeStep}>
						{steps.map((step, index) => {
							const labelProps = {}
							if (index === activeStep) {
								labelProps.error = false
								if (
									(accountErrors.email ||
										accountErrors.name ||
										accountErrors.password ||
										accountErrors.confirmPassword ||
										accountErrors.companyName ||
										accountErrors.birthday ||
										accountErrors.role ||
										accountErrors.status ||
										// accountErrors.phone ||
										accountErrors.address ||
										accountErrors.gender) &&
									activeStep === 0
								) {
									labelProps.error = true
								} else if (
									(
										accountErrors.companyName ||
										accountErrors.birthday ||
										accountErrors.role ||
										accountErrors.status ||
										// accountErrors.phone ||
										accountErrors.address ||
										accountErrors.gender) &&
									activeStep === 1
								) {
									labelProps.error = true
								} else if (
									(socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
									activeStep === 2
								) {
									labelProps.error = true
								} else {
									labelProps.error = false
								}
							}

							return (
								<Step key={index}>
									<StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
										<div className='step-label'>
											<Typography className='step-number'>{`0${index + 1}`}</Typography>
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

export default StepperLinearWithValidation