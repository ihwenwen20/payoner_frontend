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
import { useForm } from 'react-hook-form'

const defaultValues = {
	ownerName: '',
	bankName: '',
	noRekening: '',
}

const FormBanks = (props) => {
	const {onSubmit,isLoading, edit } = props

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({ defaultValues })

	return (
		<Card>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={5}>
						<Grid item xs={12} >
							<FieldBasic
								control={control}
								label='Owner Name'
								name='ownerName'
								placeholder='Enter Owner BankName'
								errors={errors}
							/>
						</Grid>
						<Grid item xs={12} >
							<FieldBasic
								control={control}
								label='Banks Name'
								name='bankName'
								placeholder='example: BCA'
								errors={errors}
							/>
						</Grid>
						<Grid item xs={12} >
							<FieldBasic
								control={control}
								label='Rekening Number'
								name='noRekening'
								placeholder='Enter Rekening Account Number'
								errors={errors}
							/>
						</Grid>

						<Grid item xs={12}>
							<CButton
								variant='contained'
								type='submit'
								disabled={false}
								loading={isLoading}
							>
								{edit ? 'Update' : 'Save'}
							</CButton>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	)
}

export default FormBanks
