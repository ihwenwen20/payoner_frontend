import FormBanks from "./form";
import CustomDialog from '@mycomponents/Reusable/CustomDialog';


const ShowBanks = () => {


	return (
		<>
			<CustomDialog
				isIconButton={true}
				color='info'
				myIcon='tabler:eye'
				text1='Show Details Bank'
				maxWidth='lg'
				content={
					<FormBanks />
				}
			/>
		</>
	)
}

export default ShowBanks;