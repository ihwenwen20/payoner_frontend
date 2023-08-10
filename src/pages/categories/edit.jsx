import CustomDialog from "@mycomponents/Reusable/CustomDialog";
import FormCategories from "./form";
import { toast } from 'react-hot-toast'

const EditCategories = () => {
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
				maxWidth='sm'
				content={
					<FormCategories
						placeholder='Enter Category Name'
						edit={true}
						onSubmit={onSubmit}
						isLoading={isLoading}
					/>
				}
			/>
		</>
	)
}

export default EditCategories;