// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

import {
	Typography,
	IconButton,
	styled,
	Card,
} from '@mui/material';
import Icon from '@components/icon'
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator'
import FormWizard from '@mycomponents/Form/FormWizard'
import StepperCustomHorizontal from '@mycomponents/Form/StepperCustomHorizontal'
import { CButton } from '@mycomponents/Button'
import CustomTextField from '@app/components/mui/text-field'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
	top: 10,
	right: 12,
	position: 'absolute',
	boxShadow: theme.shadows[2],
	transform: 'translate(10px, -10px)',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: `secondary`,
	transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
	'&:hover': {
		transform: 'translate(7px, -5px)'
	}
}))

const DialogCreate = ({ title, content, size, onClick, color, disabled, loading }) => {
	// ** State
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<Button variant='contained' sx={{ mb: 2 }} onClick={handleClickOpen} >
				<Icon fontSize='1.125rem' icon='tabler:plus' />
				Add New
			</Button>
			{/* <Card></Card> */}
			<Dialog
				open={open}
				fullWidth
				maxWidth='lg'
				keepMounted
				onClose={handleClose}
				TransitionComponent={Transition}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle sx={{
					textAlign: 'center',
					pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`]
				}}>
					<Typography variant='h5'>
						<strong>Add New {title}</strong>
					</Typography>
				</DialogTitle>
				<DialogContent>
					<CustomCloseButton onClick={handleClose}>
						<Icon icon='tabler:x' fontSize='1.25rem' />
					</CustomCloseButton>
					{content}
					{/* <FormLayoutsSeparator /> */}
					{/* <FormWizard /> */}
					{/* <StepperCustomHorizontal /> */}
				</DialogContent>
				<DialogActions className='dialog-actions-dense'>
					{/* <Button variant='contained' type='submit' onClick={onClick}>Save</Button> */}
					<CButton
						size={size}
						color={color}
						variant='contained'
						type='submit'
						onClick={onClick}
						disabled={disabled}
					>
						Save
					</CButton>
					<Button variant='tonal' color='secondary' onClick={handleClose}>Discard</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DialogCreate