import CustomDialog from "@mycomponents/Reusable/CustomDialog";
import FormBanks from "./form";
import { toast } from 'react-hot-toast'

const EditBanks = () => {
  const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		toast.success('Form updated')
	}
	return (
		<>
			<CustomDialog
				isIconButton={true}
				title='Edit Bank'
				color='primary'
				myIcon='tabler:edit'
				text1='Edit Bank'
				maxWidth='md'
				content={
					<FormBanks
						edit={true}
						onSubmit={onSubmit}
						isLoading={isLoading}
					/>
				}
			/>
		</>
	)
}

export default EditBanks;