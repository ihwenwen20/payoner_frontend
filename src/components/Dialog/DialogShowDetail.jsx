// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'

import {
	IconButton,
	styled,
} from '@mui/material';
import Icon from '@components/icon'
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator'
import StepperCustomHorizontal from '@mycomponents/Form/StepperCustomHorizontal'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />
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

const DialogShowDetail = ({ content }) => {
	// ** State
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<IconButton title="Show Details" color="info" onClick={handleClickOpen}>
				<Icon icon='tabler:eye' />
			</IconButton >
			<Dialog
				open={open}
				maxWidth='md'
				keepMounted
				onClose={handleClose}
				TransitionComponent={Transition}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogContent>
					<CustomCloseButton onClick={handleClose}>
						<Icon icon='tabler:x' fontSize='1.25rem' />
					</CustomCloseButton>
					{content}
					{/* <FormLayoutsSeparator /> */}
					{/* <StepperCustomHorizontal /> */}
				</DialogContent>
				<DialogActions className='dialog-actions-dense'>
					<Button variant='tonal' color='secondary' onClick={handleClose}>Discard</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DialogShowDetail