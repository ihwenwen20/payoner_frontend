import {
	Box,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Dialog,
	DialogTitle,
	Button,
	MenuItem,
	Typography,
	DialogContent,
	IconButton,
	styled,
} from '@mui/material';
import moment from 'moment';

import CustomTextField from '@components/mui/text-field'
import Icon from '@components/icon'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import {
	fetchCompanies,
	addCompany,
	updateCompany,
	deleteCompany,
	fetchCompanyById
} from '@slices/company/Actions';
import { setCompanies } from '@slices/company/Slice'
import { toast } from 'react-hot-toast'
import useAuthStore from '@zustand/authSlice';

const UsersPage = () => {
	const dispatch = useDispatch()
	const { companies } = useSelector((state) => state.companies);
	const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
	const [rowId, setRowId] = useState(null); const [open, setOpen] = useState(false)
	const [modeEditRow, setmodeEditRow] = useState({});
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		gender: '',
		address: '',
		role: '',
		companyName: '',
	});
	const { saveNotif } = useAuthStore();

	useEffect(() => {
		dispatch(fetchCompanies());
	}, []);

	const handleDialogToggle = () => {
		setOpen(!open);
		setmodeEditRow({});
		setForm('')
	};

	const handleSubmit = async (e) => {
		setOpen(false);
		e.preventDefault();
		// console.log('Mama, aku disubmit', form);
		if (!form) {
			console.log('form tolong di isi');
			toast.error(`${form} tolong di isi`, {
				duration: 1500,
			});
			return; // Menghentikan eksekusi jika name kosong
		}

		if (modeEditRow._id) {
			console.log('modeEdit', modeEditRow._id);
			const updatedCompany = {
				...modeEditRow,
				name: form.name,
			};

			const updatedCompanies = [...companies];

			const selectedRowIndex = updatedCompanies.findIndex((company) => company._id === modeEditRow._id);

			if (selectedRowIndex !== -1) {
				updatedCompanies[selectedRowIndex] = updatedCompany;
				// console.log(updatedCompanies);
			}

			await dispatch(updateCompany(updatedCompany.id, updatedCompany));
			await dispatch(setCompanies(updatedCompanies));
			await toast.promise(
				saveNotif(),
				{
					loading: 'Saving...',
					success: <b>Successfully!</b>,
					error: <b>Could not save.</b>,
				})
			return;
		} else {
			await dispatch(addCompany(form));
			setForm('');
			await toast.promise(
				saveNotif(),
				{
					loading: 'Saving...',
					success: <b>company added successfully'</b>,
					error: <b>Could not save.</b>,
				})
		}
	};

	const handleEdit = async (row) => {
		setForm(row.name)
		setmodeEditRow(row)
		setOpen(true);
	}

	const handleShowDetails = (id) => {
		const selectedRow = companies.find((company) => company._id === id);

		if (selectedRow) {
			console.log('handleShowDetails', selectedRow);
		}
	};

	const handleDelete = async (id) => {
		try {
			await dispatch(deleteCompany(id));
			const updatedCompanies = companies.filter((company) => company._id !== id);
			dispatch(setCompanies(updatedCompanies));
			toast.success('Company Deleted Successfully!', {
				duration: 3000
			});
		} catch (error) {
			console.error('Failed to delete company:', error);
		}
	};

	const CustomCloseButton = styled(IconButton)(({ theme }) => ({
		top: 10,
		right: 12,
		color: 'grey.500',
		position: 'absolute',
		boxShadow: theme.shadows[2],
		transform: 'translate(10px, -10px)',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: `${theme.palette.background.paper} !important`,
		transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
		'&:hover': {
			transform: 'translate(7px, -5px)'
		}
	}))

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.25,
				field: '_id',
				minWidth: 100,
				headerName: 'ID',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row._id}</Typography>
			},
			{
				flex: 0.25,
				field: 'name',
				minWidth: 150,
				headerName: 'Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
			},
			{
				field: 'email', headerName: 'Email', minWidth: 200,
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.email}</Typography>
			},
			{ field: 'phone', headerName: 'Phone', width: 150, valueGetter: (params) => params.row.contact?.phone || '-' },
			// {
			// 	field: 'role',
			// 	headerName: 'Role',
			// 	minWidth: 100,
			// 	type: 'singleSelect',
			// 	valueOptions: ['owner', 'company', 'admin'],
			// 	editable: true,
			// 	renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.role}</Typography>
			// },
			{
				field: 'active',
				headerName: 'Active',
				width: 100,
				type: 'boolean',
				editable: true,
			},
			{
				flex: 0.25,
				minWidth: 210,
				field: 'createdAt',
				headerName: 'Created Date',
				renderCell: (params) =>
					<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				minWidth: 210,
				field: 'updatedAt',
				headerName: 'Updated Date',
				// renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.updatedAt}</Typography>
				renderCell: (params) =>
					<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			// {
			//   field: 'actions',
			//   headerName: 'Actions',
			//   type: 'actions',
			//   renderCell: (params) => (
			//     <UsersActions {...{ params, rowId, setRowId }} />
			//     // {...{ params, rowId, setRowId }}
			//   ),
			// },
		],
		[rowId])

	const columns = useMemo(
		() => [
			...defaultColumns,
			{
				flex: 0.25,
				minWidth: 120,
				sortable: false,
				field: 'actions',
				headerName: 'Actions',
				renderCell: ({ row }) => (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton title="Show Details" color="info" onClick={() => handleShowDetails(row._id)}>
							<Icon icon='tabler:eye' />
						</IconButton >
						<IconButton title="Edit" color="primary" onClick={() => handleEdit(row)}>
							<Icon icon='tabler:edit' />
						</IconButton>
						<IconButton color="error" title="Delete" onClick={() => handleDelete(row._id)}>
							<Icon icon='tabler:trash' />
						</IconButton>
					</Box>
				)
			}
		])

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<h1 className='title'>Manage Users</h1>
					<p>List Users</p>
					<Card>
						<CardHeader title='List Of Tables' />
						<Divider sx={{ mt: '0 !important' }} />
						<Box
							sx={{
								p: 5,
								pb: 3,
								width: '100%',
								display: 'flex',
								flexWrap: 'wrap',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							<CustomTextField select defaultValue='Actions' sx={{ mr: 4, mb: 2 }}>
								<MenuItem value='Actions'>Selected</MenuItem>
								<MenuItem value='Delete'>Delete</MenuItem>
								<MenuItem value='Edit'>Edit</MenuItem>
							</CustomTextField>

							<Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
								<CustomTextField
									sx={{ mr: 4, mb: 2 }}
									placeholder='Search ...'
								/>
								<Button sx={{ mb: 2 }} onClick={handleDialogToggle} variant='contained'>
									<Icon fontSize='1.125rem' icon='tabler:plus' />
									Add New
								</Button>
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<Dialog fullWidth maxWidth='sm' onClose={handleDialogToggle} open={open}>
							<DialogTitle
								component='div'
								sx={{
									textAlign: 'center',
									px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
									pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
								}}
							>
								<Typography variant='h3' sx={{ mb: 2 }}>
									{modeEditRow._id ? 'Edit company' : 'Add New company'}
								</Typography>
							</DialogTitle>
							<DialogContent
								sx={{
									px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
									pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
								}}
							>
								<CustomCloseButton onClick={handleDialogToggle}>
									<Icon icon='tabler:x' fontSize='1.25rem' />
								</CustomCloseButton>
								<Box
									component='form'
									onSubmit={e => handleSubmit(e)}
									sx={{
										mt: 4,
										mx: 'auto',
										width: '100%',
										maxWidth: 360,
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'column'
									}}
								>
									<CustomTextField
										fullWidth
										sx={{ mb: 1 }}
										label='Name'
										placeholder='Enter Name'
										value={form}
										onChange={(e) => setForm(e.target.value)}
									/>
									<Box className='demo-space-x' sx={{ '& > :last-child': { mr: '0 !important' } }}>
										<Button type='submit' variant='contained'>
											{modeEditRow._id ? 'Update' : 'Save'}
										</Button>
										<Button type='reset' variant='tonal' color='secondary' onClick={handleDialogToggle}>
											Discard
										</Button>
									</Box>
								</Box>
							</DialogContent>
						</Dialog>
						<CardContent>
							<DataGrid
								autoHeight
								rows={companies}
								getRowId={(row) => row._id}
								columns={columns}
								disableRowSelectionOnClick
								pageSizeOptions={[5, 10, 25, 50, 100]}
								paginationModel={paginationModel}
								onPaginationModelChange={setPaginationModel}
								components={{
									Toolbar: GridToolbar
								}}
								checkboxSelection
								getRowSpacing={(params) => ({
									top: params.isFirstVisible ? 0 : 5,
									bottom: params.isLastVisible ? 0 : 5,
								})}
								onCellEditCommit={(params) => setRowId(params.id)}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default UsersPage