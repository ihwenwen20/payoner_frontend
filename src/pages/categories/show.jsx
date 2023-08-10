import FormCategories from "./form";
import CustomDialog from '@mycomponents/Reusable/CustomDialog';


const ShowCategories = () => {


	return (
		<>
			<CustomDialog
				isIconButton={true}
				color='info'
				myIcon='tabler:eye'
				text1='Show Details Category'
				maxWidth='sm'
				content={
					<FormCategories />
				}
			/>
		</>
	)
}

export default ShowCategories;