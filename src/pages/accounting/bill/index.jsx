import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
// import CreateBill from './create';
// import ShowBill from './show';
// import EditBill from './edit';

const BillPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.2,
				field: 'billNumber',
				minWidth: 150,
				headerName: 'Bill Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.billNumber}</Typography>
			},
			{
				flex: 0.2,
				field: 'amount',
				minWidth: 150,
				headerName: 'Amount',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.amount}</Typography>
			},
			{
				flex: 0.2,
				field: 'dueDate',
				minWidth: 150,
				headerName: 'Due Date',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.dueDate}</Typography>
			},
			{
				flex: 0.2,
				field: 'status',
				minWidth: 150,
				headerName: 'Status',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
			},
			{
				flex: 0.15,
				field: 'description',
				minWidth: 200,
				headerName: 'Description',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.description}</Typography>
			},
			{
				flex: 0.15,
				field: 'publisher',
				minWidth: 150,
				headerName: 'Publisher',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.publisher}</Typography>
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
						{/* <ShowBill />
						<EditBill /> */}
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
				urlActive='/bill' // Ubah ini sesuai dengan URL yang tepat
				url2='Bill'
				title='Manage Bill'
				subtitle='List Bill'
				// add={
				// 	<CreateBill />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Bill yang diperoleh dari server
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

export default BillPage;
