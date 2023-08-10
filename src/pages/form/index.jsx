// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// ** Styled Component
import DatePickerWrapper from '@app/styles/libs/react-datepicker'
// ** Demo Components Imports
import StepperLinearWithValidation from '@mycomponents/Form/FormWizard'
import StepperCustomHorizontal from '@mycomponents/Form/StepperCustomHorizontal'
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator'
import FormLayoutsTabs from '@mycomponents/Form/FormLayoutsTabs'
import FormValidationBasic from '@mycomponents/Form/FormValidationBasic'

const FormWizard = () => {
	return (
		<DatePickerWrapper>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<Typography variant='h6'>Linear Stepper with Validation</Typography>
				</Grid>
				<Grid item xs={12}>
					<StepperLinearWithValidation />
				</Grid>
				<Grid item xs={12}>
					<StepperCustomHorizontal />
				</Grid>
				<Grid item xs={12}>
					<FormLayoutsSeparator />
				</Grid>
				<Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
					<FormLayoutsTabs />
				</Grid>
				<Grid item xs={12}>
					<FormValidationBasic />
				</Grid>
			</Grid>
		</DatePickerWrapper>

	)
}

export default FormWizard