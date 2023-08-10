import CustomDialog from "@mycomponents/Reusable/CustomDialog";
import FormCompanies from "./form";
import { toast } from 'react-hot-toast'
import { useState, useEffect } from 'react'


const EditCompanies = () => {
  const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		toast.success('Form updated')
	}
	return (
		<>
			<CustomDialog
				isIconButton={true}
				title='Edit Category'
				color='primary'
				myIcon='tabler:edit'
				text1='Edit Category'
				maxWidth='lg'
				content={
					<FormCompanies
						// placeholder='Enter Category Name'
						// edit={true}
						// onSubmit={onSubmit}
						// isLoading={isLoading}
					/>
				}
			/>
		</>
	)
}

export default EditCompanies;