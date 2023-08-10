import { Grid } from '@mui/material'

import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CTextField } from '@mycomponents/forms/text-field'
import { CButton } from '@mycomponents/buttons/button'
import { FieldBasic, FieldPassword, FieldRadio, FieldSelect,
	 FieldTextArea,
	  FieldTextArea2,
		FieldMultiSelect,
	 } from '@mycomponents/Form/FieldBasic'

import InputAdornment from '@mui/material/InputAdornment'
import Icon from '@components/icon'

const defaultValues = {
	email: '',
	password: '',
	address: '',
	gender: '',
	multiSelect: [],
	// confirmPassword:'',
}

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(5).required(),
	// confirmPassword: yup.string().min(5).required()
	address: yup.string().required(),
	gender: yup.string().required(),
	multiSelect: yup.array().min(1).required(),
})

const TextFieldValidation = () => {
	// ** Hook
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues,
		mode: 'onChange',
		resolver: yupResolver(schema)
	})

	const genderOptions = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
	];

	const capitalizedOptions = genderOptions.map(option => ({
		...option,
		label: option.value.charAt(0).toUpperCase() + option.value.slice(1)
	}));

	const onSubmit = () => toast.success('Form Submitted')

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={5}>
				<Grid item xs={12}>
					<CTextField
						control={control}
						label='Email'
						name='email'
						placeholder='enter email'
						errors={errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<FieldTextArea
						control={control}
						label='Address'
						name='address'
						placeholder='Enter Address'
						errors={errors}
						size={3}
					/>
				</Grid>
				<Grid item xs={12}>
					<FieldTextArea2
						control={control}
						label='Address'
						name='address'
						placeholder='Enter Address'
						errors={errors}
						size={3}
					/>
				</Grid>
				<Grid item xs={12}>
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
				<Grid item xs={12}>
					<FieldRadio
						control={control}
						label='Gender'
						name='gender'
						options={capitalizedOptions}
						errors={errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<FieldPassword
						control={control}
						label='Password'
						name='password'
						placeholder='Enter Password'
						errors={errors}
						showStart={true}
					/>
				</Grid>
				<Grid item xs={12}>
					<FieldSelect
						control={control}
						label='Select Gender'
						name='gender'
						options={capitalizedOptions}
						errors={errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<FieldMultiSelect
						control={control}
						label='Multi Select Gender'
						name='multiSelect'
						options={capitalizedOptions}
						errors={errors}
					/>
				</Grid>
				<Grid item xs={12}>
					<CButton size='medium' type='submit' variant='contained'>
						Submit
					</CButton>
				</Grid>
			</Grid>
		</form>
	)
}

export default TextFieldValidation
