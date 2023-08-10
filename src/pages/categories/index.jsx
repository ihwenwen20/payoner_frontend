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
	fetchCategories,
	addCategory,
	updateCategory,
	deleteCategory,
} from '@slices/category/Actions';
import { setCategories } from '@slices/category/Slice'
import { toast } from 'react-hot-toast'
import useAuthStore from '@zustand/authSlice';


const CategoriesPage = () => {
	const dispatch = useDispatch()
	// const { accessToken } = useAuthStore((state) => state.getAccessToken());
	// cara 1
	const { categories } = useSelector((state) => state.categories);
	// cara 2
	// const categories = useSelector((state) => state.categories.categories);
	const lastId = categories.lastId;
	const [rowId, setRowId] = useState(null);
	const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
	const [open, setOpen] = useState(false)
	const [modeEditRow, setmodeEditRow] = useState({});
	const { saveNotif } = useAuthStore();
	const [form, setForm] = useState({
		categoryName: ''
	});

	useEffect(() => {
		dispatch(fetchCategories(lastId));
	}, [dispatch, lastId]);

	const handleDialogToggle = () => {
		setOpen(!open);
		setmodeEditRow({});
		setForm('')
	};

	const handleSubmit = async (e) => {
		setOpen(false);
		e.preventDefault();
		console.log('Mama, aku disubmit', form);
		if (!form) {
			console.log('form tolong di isi');
			toast.error(`${form} tolong di isi`, {
				duration: 1500,
			});
			return; // Menghentikan eksekusi jika form kosong
		}

		if (modeEditRow._id) {
			console.log('modeEdit', modeEditRow._id);
			const updatedData = {
				...modeEditRow,
				name: form,
			};

			const updatedRows = [...categories];

			const selectedRowsIndex = updatedRows.findIndex((category) => category._id === modeEditRow._id);

			if (selectedRowsIndex !== -1) {
				updatedRows[selectedRowsIndex] = updatedData;
				// console.log(updatedRows);
			}

			await dispatch(updateCategory(updatedData.id, updatedData));
			await dispatch(setCategories(updatedRows));
			// toast.success('Successfully!');
			await toast.promise(
				saveNotif(),
				{
					loading: 'Saving...',
					success: <b>Successfully!</b>,
					error: <b>Could not save.</b>,
				})
			return;
			// addToast('Category updated successfully', { position: 'top-right', type: 'success' });
		} else {
			await dispatch(addCategory({ name: form }));
			setForm('');
			// toast.success('Category added successfully', {
			// 	duration: 3000
			// });
			await toast.promise(
				saveNotif(),
				{
					loading: 'Saving...',
					success: <b>Category added successfully'</b>,
					error: <b>Could not save.</b>,
				})
		}
	};

	const handleEdit = async (row) => {
		console.log('handleEdit')
		setForm(row.name)
		setmodeEditRow(row)
		setOpen(true);
	}

	const handleShowDetails = (categoryId) => {
		const selectedRows = categories.find((category) => category._id === categoryId);

		if (selectedRows) {
			// Tampilkan detail kategori yang dipilih, misalnya dengan menggunakan snackbar atau modal
			console.log('handleShowDetails', selectedRows);
		}
	};

	const handleDelete = async (categoryId) => {
		try {
			await dispatch(deleteCategory(categoryId));
			// Jika penghapusan berhasil, perbarui daftar kategori di Redux
			const updatedRows = categories.filter((category) => category._id !== categoryId);
			dispatch(setCategories(updatedRows));
			console.log('dis', updatedRows);
			// console.log('up',updatedRows);
			toast.success('Category Deleted Successfully!', {
				duration: 3000
			});
			// toast.success()
		} catch (error) {
			console.error('Failed to delete category:', error);
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
				minWidth: 240,
				headerName: 'ID',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row._id}</Typography>
			},
			{
				flex: 0.25,
				field: 'name',
				minWidth: 240,
				headerName: 'Category Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
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
						<IconButton title="Show Details" color="info" onClick={() => handleShowDetails(row)}>
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
		],
		[rowId])

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<h1 className='title'>Categories List</h1>
					<p>Subtitle</p>
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
									{modeEditRow._id ? 'Edit Category' : 'Add New Category'}
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
									// handleSubmit={handleSubmit}
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
										label='Category Name'
										placeholder='Enter Category Name'
										value={form}
										// handleChange={handleChange}
										onChange={(e) => setForm(e.target.value)}
									// onChange={handleChange}
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
								rows={categories}
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
								onCellEditCommit={(params) => setRowId(params.id)}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default CategoriesPage