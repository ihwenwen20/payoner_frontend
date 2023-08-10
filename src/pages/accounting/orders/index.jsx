import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
// import ShowOrder from './show';
import moment from 'moment';

const OrderPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.1,
				field: 'date',
				minWidth: 150,
				headerName: 'Date',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{moment(row.date).format('YYYY-MM-DD HH:mm:ss')}</Typography>
			},
			{
				flex: 0.15,
				field: 'personalDetail.name',
				minWidth: 150,
				headerName: 'Customer Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.personalDetail.name}</Typography>
			},
			{
				flex: 0.15,
				field: 'personalDetail.email',
				minWidth: 150,
				headerName: 'Customer Email',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.personalDetail.email}</Typography>
			},
			{
				flex: 0.15,
				field: 'personalDetail.role',
				minWidth: 150,
				headerName: 'Customer Role',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.personalDetail.role}</Typography>
			},
			{
				flex: 0.1,
				field: 'status',
				minWidth: 150,
				headerName: 'Status',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
			},
			{
				flex: 0.1,
				field: 'taxRate',
				minWidth: 150,
				headerName: 'Tax Rate',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.taxRate}</Typography>
			},
			{
				flex: 0.1,
				field: 'subTotal',
				minWidth: 150,
				headerName: 'Sub Total',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.subTotal}</Typography>
			},
			{
				flex: 0.1,
				field: 'totalPay',
				minWidth: 150,
				headerName: 'Total Pay',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.totalPay}</Typography>
			},
			{
				flex: 0.1,
				field: 'totalOrderProduct',
				minWidth: 150,
				headerName: 'Total Products',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.totalOrderProduct}</Typography>
			},
			{
				flex: 0.15,
				field: 'customer.name',
				minWidth: 150,
				headerName: 'Customer Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.customer.name}</Typography>
			},
			{
				flex: 0.15,
				field: 'payment.method',
				minWidth: 150,
				headerName: 'Payment Method',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.payment.method}</Typography>
			},
			{
				flex: 0.15,
				field: 'transaction.type',
				minWidth: 150,
				headerName: 'Transaction Type',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.transaction.type}</Typography>
			},
			// ... other columns
		],
		[rowId]
	);

	// ... Your other code

	return (
		<>
			<CPage
				urlActive='/orders' // Ubah ini sesuai dengan URL yang tepat
				url2='Orders'
				title='Manage Orders'
				subtitle='List Orders'
				tabel={
					<CTable
						columns={defaultColumns}
						// rows={[]} // Isi ini dengan data Orders yang diperoleh dari server
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

export default OrderPage;
