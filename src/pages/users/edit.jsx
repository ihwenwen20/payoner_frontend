import StepperCustomHorizontal from "@mycomponents/Form/StepperCustomHorizontal";
import CustomDialog from "@mycomponents/Reusable/CustomDialog";

const EditUser = () => {

	return (
		<>
			<CustomDialog
			isIconButton={true}
			title='Edit User'
			color='primary'
			myIcon='tabler:edit'
			text1='Edit Users'
			content={
				<StepperCustomHorizontal />
			}
			maxWidth='md'
			/>
		</>
	)
}

export default EditUser;