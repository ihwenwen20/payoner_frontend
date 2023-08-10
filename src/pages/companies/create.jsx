import FormCategories from "./form";
import CustomDialog from '@mycomponents/Reusable/CustomDialog';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
	addCategory,
} from '@slices/category/Actions';
import { setCategories } from '@slices/category/Slice'
import { toast } from 'react-hot-toast'


const CreateCategories = () => {
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
				myIcon='tabler:edit'
				text1='Add New Category'
				maxWidth='md'
				content={
					<FormCategories
						// placeholder='Enter Category Name'
						// edit={false}
						// onSubmit={onSubmit}
						// isLoading={isLoading}
					/>
				}
			/>
		</>
	)
}

export default CreateCategories;