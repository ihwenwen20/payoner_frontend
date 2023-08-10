// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import {
	FieldBasic
} from '@mycomponents/Reusable/CustomForm'
// ** Custom Component Import
import CustomTextField from '@components/mui/text-field'
import { CButton } from '@mycomponents/Button'

// ** Third Party Imports
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

const defaultValues = {
	name: '',
}

const FormCategories = (props) => {
	const { label, name, placeholder, onSubmit,isLoading, edit } = props

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({ defaultValues })

	// const onSubmit = () => toast.success('Form Submitted')

	return (
		<Card>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={5}>
						<Grid item xs={12} >
							<FieldBasic
								control={control}
								label='Category Name'
								name='name'
								placeholder={placeholder}
								errors={errors}
							/>
						</Grid>

						<Grid item xs={12}>
							<CButton
								variant='contained'
								type='submit'
								// onClick={onSubmit}
								disabled={false}
								loading={isLoading}
							>
								{edit ? 'Update' : 'Submit'}
							</CButton>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default FormCategories
