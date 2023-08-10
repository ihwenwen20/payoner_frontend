
import { useState, useEffect, useMemo } from 'react'
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import CreateUser from "../users/add";
import {
	Box,
	CardContent,
	Typography,
	Grid,
} from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchCategories,
	addCategory,
	updateCategory,
	deleteCategory,
} from '@slices/category/Actions';
import { setCategories } from '@slices/category/Slice'
import CreateCategories from './create';
import ShowCategories from './show'
import EditCategories from './edit'

const CategoriesPage = () => {
	const dispatch = useDispatch()
	const { categories } = useSelector((state) => state.categories);

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7)
	const [page, setPage] = useState(0)

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

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
				headerName: 'Category Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
			},
			// {
			// 	flex: 0.25,
			// 	minWidth: 210,
			// 	field: 'createdAt',
			// 	headerName: 'Created Date',
			// 	renderCell: (params) =>
			// 		<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			// },
			// {
			// 	flex: 0.25,
			// 	minWidth: 210,
			// 	field: 'updatedAt',
			// 	headerName: 'Updated Date',
			// 	// renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.updatedAt}</Typography>
			// 	renderCell: (params) =>
			// 		<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			// },
		],
		[rowId])

	const columns = useMemo(
		() => [
			...defaultColumns,
			{
				flex: 0.25,
				minWidth: 200,
				field: 'createdAt',
				headerName: 'Created Date',
				renderCell: (params) =>
					<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				minWidth: 200,
				field: 'updatedAt',
				headerName: 'Updated Date',
				// renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.updatedAt}</Typography>
				renderCell: (params) =>
					<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				minWidth: 120,
				sortable: false,
				field: 'actions',
				headerName: 'Actions',
				renderCell: ({ row }) => (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<ShowCategories />
						<EditCategories />
						{/* <DialogDelete
							onDelete={() => handleDelete(row._id)}
							data={row}
						/> */}
					</Box>
				)
			}
		])

	return (
		<>
			<CPage
				urlActive='/categories'
				url2='Categories'
				title='Manage Categories'
				subtitle='List Categories'
				add={
					<CreateCategories />
				}
				tabel={
					<CTable
						columns={columns}
						rows={categories}
						size={size}
						// rowsPerPageOptions={[7, 10, 25, 50, 100]}
						setSize={setSize}
						setPage={setPage}
						page={page}
						onCellEditCommit={(params) => setRowId(params.id)}
					/>
				}
			/>
		</>
	)
}

export default CategoriesPage;