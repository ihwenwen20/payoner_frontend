import {
	Box,
	CardContent,
	Typography,
} from '@mui/material';
import moment from 'moment';
import DialogEdit from '@mycomponents/Dialog/DialogEdit'
import DialogDelete from '@mycomponents/Dialog/DialogDelete'

import CustomChip from '@components/mui/chip'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'

const Table = ({
	rows,
}) => {
	const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
	const [rowId, setRowId] = useState(null);

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
		],
		[rowId])

	const columns = useMemo(
		() => [
			...defaultColumns,
			// {
			// 	flex: 0.25,
			// 	minWidth: 120,
			// 	sortable: false,
			// 	field: 'actions',
			// 	headerName: 'Actions',
			// 	renderCell: ({ row }) => (
			// 		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			// 			<ShowDetailUser />
			// 			<EditUser />
			// 			<DialogDelete
			// 				onDelete={() => handleDelete(row._id)}
			// 				data={row}
			// 			/>
			// 		</Box>
			// 	)
			// }
		])


	return (
		<>
			<CardContent>
				<DataGrid
					autoHeight
					rows={rows}
					getRowId={(row) => row._id}
					columns={columns}
					disableRowSelectionOnClick
					pageSizeOptions={[5, 10, 25, 50, 100]}
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

export default Table;