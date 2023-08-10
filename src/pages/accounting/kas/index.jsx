import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
// import CreateCashSales from './create';
// import ShowCashSales from './show';
// import EditCashSales from './edit';

const CashSalesPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.15,
				field: 'transactionNumber',
				minWidth: 150,
				headerName: 'Transaction Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.transactionNumber}</Typography>
			},
			{
				flex: 0.15,
				field: 'amount',
				minWidth: 150,
				headerName: 'Amount',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.amount}</Typography>
			},
			{
				flex: 0.15,
				field: 'transactionDate',
				minWidth: 150,
				headerName: 'Transaction Date',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.transactionDate}</Typography>
			},
			{
				flex: 0.15,
				field: 'type',
				minWidth: 150,
				headerName: 'Type',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.type}</Typography>
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
						{/* <ShowCashSales />
						<EditCashSales /> */}
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
				urlActive='/cash-sales' // Ubah ini sesuai dengan URL yang tepat
				url2='Cash Sales'
				title='Manage Cash Sales'
				subtitle='List Cash Sales'
				// add={
				// 	<CreateCashSales />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Cash Sales yang diperoleh dari server
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

export default CashSalesPage;
