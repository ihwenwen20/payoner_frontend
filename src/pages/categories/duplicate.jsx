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

import CustomTextField from '@components/mui/text-field'
import Icon from '@components/icon'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
	fetchCategories,
	addCategory,
	updateCategory,
	deleteCategory,
	fetchCategoryById,
	setCategories
} from '@slices/categorySlice';
import { toast } from 'react-hot-toast'
import useAuthStore from '@zustand/authSlice';

const Categories = () => {
	const dispatch = useDispatch()
	const { categories } = useSelector((state) => state.categories);
	const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
	const [open, setOpen] = useState(false)
	const [modeEditCategory, setmodeEditCategory] = useState({});
	const [categoryName, setCategoryName] = useState('');

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	const handleDialogToggle = () => {
		setOpen(!open);
		setmodeEditCategory({});
		setCategoryName('')
	};
	
	const handleSubmit = async (e) => {
		setOpen(false);
		e.preventDefault();

		if (!categoryName) {
			toast.error('Nama kategori harus diisi', {
				duration: 1500,
			});
			return;
		}

		if (modeEditCategory._id) {
			const updatedCategory = {
				...modeEditCategory,
				name: categoryName,
			};

			const updateResponse = await dispatch(updateCategory(updatedCategory.id, updatedCategory));

			if (updateResponse.success) {
				await dispatch(setCategories(updatedCategories));
				toast.success(updateResponse.message);
			} else {
				toast.error(updateResponse.message, {
					duration: 3000,
				});
			}
		} else {
			const addResponse = await dispatch(addCategory({ name: categoryName }));

			if (addResponse.success) {
				setCategoryName('');
				toast.success(addResponse.message);
			} else {
				toast.error(addResponse.message, {
					duration: 3000,
				});
			}
		}
	};

	const handleEdit = async (row) => {
		console.log('handleEdit')
		setCategoryName(row.name)
		setmodeEditCategory(row)
		setOpen(true);
	}

	const handleShowDetails = (categoryId) => {
		const selectedCategory = categories.find((category) => category._id === categoryId);

		if (selectedCategory) {
			// Tampilkan detail kategori yang dipilih, misalnya dengan menggunakan snackbar atau modal
			console.log('handleShowDetails', selectedCategory);
		}
	};

	const handleDelete = async (categoryId) => {
		await dispatch(deleteCategory(categoryId));
		const response = await dispatch(fetchCategories());
		return response;
		// addToast('Category deleted successfully', { position: 'top-right', type: 'success' });
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

	const defaultColumns = [
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
			renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.createdAt}</Typography>
		},
		{
			flex: 0.25,
			minWidth: 210,
			field: 'updatedAt',
			headerName: 'Updated Date',
			renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.updatedAt}</Typography>
		}
	]

	const columns = [
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
	]

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
									{modeEditCategory._id ? 'Edit Category' : 'Add New Category'}
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
										label='Category Name'
										placeholder='Enter Category Name'
										value={categoryName}
										onChange={(e) => setCategoryName(e.target.value)}
									/>
									<Box className='demo-space-x' sx={{ '& > :last-child': { mr: '0 !important' } }}>
										<Button type='submit' variant='contained'>
											{modeEditCategory._id ? 'Update' : 'Save'}
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
								pageSizeOptions={[10, 25, 50]}
								paginationModel={paginationModel}
								onPaginationModelChange={setPaginationModel}
								components={{
									Toolbar: GridToolbar
								}}
								checkboxSelection
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default Categories