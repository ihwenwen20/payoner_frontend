import FormBanks from "./form";
import CustomDialog from '@mycomponents/Reusable/CustomDialog';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'


const CreateBanks = () => {
  const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		toast.success('Form Submitted')
	}

	return (
		<>
			<CustomDialog
				isIconButton={false}
				color='primary'
				text1='Add New Bank'
				maxWidth='md'
				content={
					<FormBanks
						edit={false}
						onSubmit={onSubmit}
						isLoading={isLoading}
					/>
				}
			/>
		</>
	)
}

export default CreateBanks;