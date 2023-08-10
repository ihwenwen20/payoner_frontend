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
import * as yup from 'yup'

import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import DatePickerWrapper from '@app/styles/libs/react-datepicker'
import { en, id, es } from 'date-fns/locale'
import {
	FieldBasic,
	FieldPassword,
	FieldTextArea,
	FieldSelect,
} from '@mycomponents/Reusable/CustomForm'

// ** Icon Imports
import Icon from '@components/icon'

// ** Custom Components Imports
import StepperCustomDot from '@mycomponents/Form/StepperCustomDot'
import CustomAvatar from '@components/mui/avatar'
import CustomTextField from '@components/mui/text-field'

// ** Hook Import
import { useSettings } from '@app/context-hooks/useSettings'

// ** Util Import
import { hexToRGBA } from '@app/utils/hex-to-rgba'

// ** Styled Component
import StepperWrapper from '@app/styles/mui/stepper'
import { CButton } from '@mycomponents/Button'

const defaultValues = {
	logo: '',
	companyName: '',
	email: '',
	password: '',
	confirmPassword: '',
	phone: '',
	birthday: new Date(),
	address: '',
	status: '',
	mottoCompany: '',
	about: '',
	terms: '',
	policy: '',
	speedtest: '',
	watermark: '',
}

const schema = yup.object().shape({
	logo: yup.string().required(),
	companyName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([yup.ref('password'), ''], 'Password and Confirm Password do not match'),
	phone: yup.number().required(),
	birthday: yup.string().required(),
	address: yup.string().required(),
	status: yup.string().required(),
	mottoCompany: yup.string().required(),
	about: yup.string().required(),
	terms: yup.string().required(),
	policy: yup.string().required(),
	speedtest: yup.string().required(),
	watermark: yup.string().required(),
})

const steps = [
	{
		icon: 'tabler:home',
		title: 'Account Details',
		subtitle: 'Enter your Account Details'
	},
	{
		icon: 'tabler:user',
		title: 'Company Profile',
		subtitle: 'Setup Information'
	},
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

const FormCompanies = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [formData, setFormData] = useState({
		logo: '',
		companyName: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		birthday: new Date(),
		address: '',
		status: '',
		mottoCompany: '',
		about: '',
		terms: '',
		policy: '',
		speedtest: '',
		watermark: '',
	})

	// ** Hooks & Var
	const { settings } = useSettings()
	const smallScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
	const { direction } = settings

	const {
		reset,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues,
		mode: 'onChange',
		resolver: yupResolver(schema)
	})
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
		setActiveStep(0)
	}

	const onSubmit = () => {
		setActiveStep(activeStep + 1)
		// setActiveStep(prevActiveStep => prevActiveStep + 1)
		if (activeStep === steps.length - 1) {
			toast.success('Form Submitted')
		}
	}

	const handleChange = prop => event => {
		setFormData({ ...formData, [prop]: event.target.value })
	}

	const handleDateChange = (date) => {
		setFormData({ ...formData, birthday: date });
	};

	const getStepContent = step => {
		switch (step) {
			case 0:
				return (
					<>
						<Grid item xs={12} sm={6}>
							<FieldBasic
								control={control}
								label='Company Name'
								name='name'
								placeholder='Enter Company Name'
								errors={errors}
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
							<FieldBasic
								control={control}
								label='Email'
								name='email'
								placeholder='enter email'
								errors={errors}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<Icon fontSize='1.25rem' icon='tabler:mail' />
										</InputAdornment>
									)
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldPassword
								control={control}
								label='Password'
								name='password'
								placeholder='Enter Password'
								errors={errors}
								showStart={true}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldPassword
								control={control}
								label='Confirm Password'
								name='confirmPassword'
								placeholder='Enter Confirm Password'
								errors={errors}
								showStart={true}
								confirmPassword={true}
							/>
						</Grid>
					</>
				)
			case 1:
				return (
					<Fragment key={step}>
						<Grid item xs={12} sm={6}>
							<DatePickerWrapper>
								<DatePicker
									selected={formData.birthday}
									name='birthday'
									onChange={handleDateChange}
									locale={id}
									dateFormat='dd MMMM yyyy'
									showYearDropdown
									showMonthDropdown
									placeholderText='DD/MM/YYYY'
									customInput={<CustomInput />}
								/>
							</DatePickerWrapper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldBasic
								control={control}
								type='number'
								label='Phone No.'
								name='email'
								placeholder='085x-xxxx-xx90'
								errors={errors}
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
						{/* <Grid item xs={12} sm={6}>
							<FieldSelect
								control={control}
								label='Select Status'
								name='status'
								errors={errors}
								SelectProps={{
									value: formData.role,
									displayEmpty: true,
									onChange: handleChange('role')
								}}
							/>
						</Grid> */}
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='Address'
								name='address'
								placeholder='Enter Address'
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='Motto Company'
								name='mottoCompany'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='About Company'
								name='about'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='Terms'
								name='terms'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='Policy'
								name='policy'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldBasic
								control={control}
								label='Speedtest'
								name='speedtest'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FieldTextArea
								control={control}
								label='Watermark'
								name='watermark'
								placeholder=''
								errors={errors}
								size={2}
							/>
						</Grid>
					</Fragment>
				)
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

export default FormCompanies
