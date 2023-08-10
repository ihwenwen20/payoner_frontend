import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
// import CreateCustomer from './create';
// import ShowCustomer from './show';
// import EditCustomer from './edit';
import moment from 'moment';

const CustomerPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.2,
				field: 'name',
				minWidth: 150,
				headerName: 'Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
			},
			{
				flex: 0.2,
				field: 'email',
				minWidth: 150,
				headerName: 'Email',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.email}</Typography>
			},
			{
				flex: 0.15,
				field: 'role',
				minWidth: 150,
				headerName: 'Role',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.role}</Typography>
			},
			{
				flex: 0.15,
				field: 'status',
				minWidth: 150,
				headerName: 'Status',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
			},
			{
				flex: 0.15,
				field: 'phoneNumber',
				minWidth: 150,
				headerName: 'Phone Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.phoneNumber}</Typography>
			},
			{
				flex: 0.2,
				field: 'avatar',
				minWidth: 150,
				headerName: 'Avatar',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.avatar}</Typography>
			},
			{
				flex: 0.2,
				field: 'fileName',
				minWidth: 150,
				headerName: 'File Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.fileName}</Typography>
			},
			// ... other columns
		],
		[rowId]
	);

	const columns = useMemo(
		() => [
			...defaultColumns,
			{
				flex: 0.15,
				field: 'createdAt',
				minWidth: 200,
				headerName: 'Created Date',
				renderCell: (params) => <Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.15,
				field: 'updatedAt',
				minWidth: 200,
				headerName: 'Updated Date',
				renderCell: (params) => <Typography sx={{ color: 'text.secondary' }}>{moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.15,
				minWidth: 120,
				sortable: false,
				field: 'actions',
				headerName: 'Actions',
				renderCell: ({ row }) => (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{/* <ShowCustomer />
						<EditCustomer /> */}
						{/* <DialogDelete
							onDelete={() => handleDelete(row._id)}
							data={row}
						/> */}
					</Box>
				)
			},
		]
	);

	// ... Your other code

	return (
		<>
			<CPage
				urlActive='/customer' // Ubah ini sesuai dengan URL yang tepat
				url2='Customer'
				title='Manage Customers'
				subtitle='List Customers'
				// add={
				// 	<CreateCustomer />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Customers yang diperoleh dari server
						size={size}
						setSize={setSize}
						setPage={setPage}
						page={page}
						onCellEditCommit={(params) => setRowId(params.id)}
					/>
				}
			/>
		</>
	);
}

export default CustomerPage;
