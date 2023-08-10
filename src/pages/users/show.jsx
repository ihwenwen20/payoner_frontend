import DialogShowDetail from '@mycomponents/Dialog/DialogShowDetail';
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator';
import CustomDialog from '@mycomponents/Reusable/CustomDialog';
import UserViewLeft from './UserViewLeft';

const ShowDetailUser = () => {


	return (
		<>
			<CustomDialog
        title='Show Details'
        color='info'
        content={
				// <FormLayoutsSeparator />
				<UserViewLeft />
			}
        myIcon='tabler:eye'
				isIconButton={true}
				text1='Show Details Users'
				maxWidth='md'
      />
		</>
	)
}

export default ShowDetailUser;