import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import {
	fetchCompanies,
	addCompany,
	updateCompany,
	deleteCompany,
	fetchCompanyById
} from '@slices/company/Actions';
import { setCompanies } from '@slices/company/Slice'
import { toast } from 'react-hot-toast'
import useAuthStore from '@zustand/authSlice';
import CustomDialog from '@mycomponents/Reusable/CustomDialog';
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator';
import StepperLinearWithValidation from '@mycomponents/Form/FormWizard';

const CreateUser = () => {

	return (
		<>
			<CustomDialog
				isIconButton={false}
				color='primary'
				myIcon='tabler:edit'
				text1='Add New User'
				maxWidth='lg'
				content={
					// <FormLayoutsSeparator />
					<StepperLinearWithValidation />
				}
				// isVisible={true}
				// text2='Save'
			/>
		</>
	)
}

export default CreateUser;