import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
// import CreateVoucher from './create';
// import ShowVoucher from './show';
// import EditVoucher from './edit';
import moment from 'moment';

const VoucherPage = () => {

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
				flex: 0.15,
				field: 'status',
				minWidth: 150,
				headerName: 'Status',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
			},
			{
				flex: 0.15,
				field: 'disposable',
				minWidth: 150,
				headerName: 'Disposable',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.disposable}</Typography>
			},
			{
				flex: 0.2,
				field: 'thumbnail',
				minWidth: 150,
				headerName: 'Thumbnail',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.thumbnail}</Typography>
			},
			{
				flex: 0.2,
				field: 'category.name', // Ganti ini dengan field yang tepat untuk menampilkan nama kategori
				minWidth: 150,
				headerName: 'Category',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.category.name}</Typography>
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
						{/* <ShowVoucher />
						<EditVoucher /> */}
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
				urlActive='/voucher' // Ubah ini sesuai dengan URL yang tepat
				url2='Voucher'
				title='Manage Vouchers'
				subtitle='List Vouchers'
				// add={
				// 	<CreateVoucher />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Vouchers yang diperoleh dari server
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

export default VoucherPage;
