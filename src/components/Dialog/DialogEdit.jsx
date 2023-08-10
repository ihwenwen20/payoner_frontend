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
} from '@mui/material';
import Icon from '@components/icon'
import FormLayoutsSeparator from '@mycomponents/Form/FormLayoutsSeparator'
import FormWizard from '@mycomponents/Form/FormWizard'
import StepperCustomHorizontal from '@mycomponents/Form/StepperCustomHorizontal'

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
	// backgroundColor: `${theme.palette.background.paper} !important`,
	backgroundColor: `secondary`,
	transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
	'&:hover': {
		transform: 'translate(7px, -5px)'
	}
}))

const DialogEdit = ({
	type, color, title,maxWidth,
}) => {
	// ** State
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<IconButton title={type} color={color} onClick={handleClickOpen}>
				<Icon icon='tabler:edit' />
			</IconButton>
			<Dialog
				open={open}
				maxWidth={maxWidth}
				keepMounted
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<DialogTitle sx={{
					textAlign: 'center',
					pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`]
				}}>
					<Typography sx={{ fontSize: '1.3rem' }}>
						<strong>{title}</strong>
					</Typography>
				</DialogTitle>
				<DialogContent>
					<CustomCloseButton onClick={handleClose}>
						<Icon icon='tabler:x' fontSize='1.25rem' />
					</CustomCloseButton>
					{/* <FormLayoutsSeparator /> */}
					{/* <FormWizard /> */}
					<StepperCustomHorizontal />
				</DialogContent>
				<DialogActions className='dialog-actions-dense'>
					<Button variant='contained' type='submit'>Update</Button>
					<Button variant='tonal' color='secondary' onClick={handleClose}>Discard</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DialogEdit