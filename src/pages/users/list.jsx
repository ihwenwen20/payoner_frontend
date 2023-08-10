import {
	Box,
	CardContent,
	Typography,
	Grid,
} from '@mui/material';
import moment from 'moment';
import DialogEdit from '@mycomponents/Dialog/DialogEdit'
import DialogDelete from '@mycomponents/Dialog/DialogDelete'

import CustomChip from '@components/mui/chip'
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
import ShowDetailUser from './show';
import EditUser from './edit';

const userStatusObj = {
	active: 'success',
	pending: 'warning',
	inactive: 'secondary'
}

const ListUser = () => {
	const dispatch = useDispatch()
	const { companies } = useSelector((state) => state.companies);
	const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
	const [rowId, setRowId] = useState(null);

	useEffect(() => {
		dispatch(fetchCompanies());
	}, []);

	const handleDelete = async (id) => {
		const selectedRow = companies.find((company) => company._id === id);
		if (selectedRow) {
			console.log(`Delete row with ID: ${id}`);
			console.log('Delete row:', selectedRow.email);
		}
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
				flex: 0.1,
				minWidth: 110,
				field: 'status',
				headerName: 'Status',
				type: 'singleSelect',
				valueOptions: ['Active', 'Pending', 'inactive'],
				editable: true,
				renderCell: ({ row }) => {
					return (
						<CustomChip
							rounded
							skin='light'
							size='small'
							label={row.status}
							color={userStatusObj[row.status]}
							sx={{ textTransform: 'capitalize' }}
						/>
					)
				}
			},
			// {
			// 	field: 'status',
			// 	headerName: 'Active',
			// 	width: 100,
			// 	type: 'boolean',
			// 	editable: true,
			// },
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
						<ShowDetailUser />
						<EditUser />
						<DialogDelete
							onDelete={() => handleDelete(row._id)}
							data={row}
						/>
					</Box>
				)
			}
		])

	return (
		<>
			<CardContent>
				<DataGrid
					autoHeight
					rows={companies}
					getRowId={(row) => row._id}
					columns={columns}
					disableRowSelectionOnClick
					pageSizeOptions={[7, 10, 25, 50, 100]}
					paginationModel={paginationModel}
					onPaginationModelChange={setPaginationModel}
					slots={{
						toolbar: GridToolbar,
					}}
					checkboxSelection
					getRowSpacing={(params) => ({
						top: params.isFirstVisible ? 0 : 5,
						bottom: params.isLastVisible ? 0 : 5,
					})}
					onCellEditCommit={(params) => setRowId(params.id)}
				/>
			</CardContent>
		</>
	)
}

export default ListUser