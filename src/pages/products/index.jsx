import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
import CreateProduct from './create';
import ShowProduct from './show';
import EditProduct from './edit';

const ProductsPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.25,
				field: 'productName',
				minWidth: 150,
				headerName: 'Product Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.productName}</Typography>
			},
			{
				flex: 0.25,
				field: 'categoryName',
				minWidth: 150,
				headerName: 'Category',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.categoryName}</Typography>
			},
			{
				flex: 0.25,
				field: 'price',
				minWidth: 150,
				headerName: 'Price',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.price}</Typography>
			},
			{
				flex: 0.25,
				field: 'description',
				minWidth: 200,
				headerName: 'Description',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.description}</Typography>
			},
			{
				flex: 0.25,
				field: 'availability',
				minWidth: 150,
				headerName: 'Availability',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.availability}</Typography>
			},
			// ... other columns
		],
		[rowId]
	);

	const columns = useMemo(
		() => [
			...defaultColumns,
			{
				flex: 0.25,
				field: 'createdAt',
				minWidth: 200,
				headerName: 'Created Date',
				renderCell: (params) => <Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				field: 'updatedAt',
				minWidth: 200,
				headerName: 'Updated Date',
				renderCell: (params) => <Typography sx={{ color: 'text.secondary' }}>{moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				minWidth: 120,
				sortable: false,
				field: 'actions',
				headerName: 'Actions',
				renderCell: ({ row }) => (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<ShowProduct />
						<EditProduct />
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
				urlActive='/products' // Ubah ini sesuai dengan URL yang tepat
				url2='Products'
				title='Manage Products'
				subtitle='List Products'
				add={
					<CreateProduct />
				}
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data products yang diperoleh dari server
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

export default ProductsPage;
