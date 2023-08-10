// ** React Imports
import { forwardRef, useState, useEffect } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import {
	Typography,
	IconButton,
	styled,
} from '@mui/material';
import Icon from '@components/icon'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />
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

const DialogDelete = ({ onDelete, data, email, companyEmail }) => {
	// useEffect(() => {
	//   console.log('data', data);
	// }, []);
	// ** State
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<IconButton color="error" title="Delete" onClick={handleClickOpen}>
				<Icon icon='tabler:trash' />
			</IconButton>
			<Dialog
				open={open}
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
					<Typography sx={{ fontSize: '1.3rem' }}>
						<strong>Are you sure to delete this data: `{email}`  ?</strong>
					</Typography>
				</DialogTitle>
				<DialogContent>
					<CustomCloseButton onClick={handleClose}>
						<Icon icon='tabler:x' fontSize='1.25rem' />
					</CustomCloseButton>
					<Alert severity='warning'>
						<AlertTitle>Warning!</AlertTitle>
						This is an warning alert — <strong>Be careful you won't be able to return this!</strong>
					</Alert>
				</DialogContent>
				<DialogActions className='dialog-actions-dense'>
					<Button color='error' variant='contained' onClick={onDelete}>Agree</Button>
					<Button variant='tonal' color='secondary' onClick={handleClose}>Disagree</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DialogDelete
