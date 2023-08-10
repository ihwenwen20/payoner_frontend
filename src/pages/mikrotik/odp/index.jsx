import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
// import CreateODP from './create';
// import ShowODP from './show';
// import EditODP from './edit';

const OdpPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.15,
				field: 'odcCode',
				minWidth: 150,
				headerName: 'ODC Code',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.odcCode}</Typography>
			},
			{
				flex: 0.15,
				field: 'odpCode',
				minWidth: 150,
				headerName: 'ODP Code',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.odpCode}</Typography>
			},
			{
				flex: 0.1,
				field: 'oltPortNumber',
				minWidth: 150,
				headerName: 'OLT Port Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.oltPortNumber}</Typography>
			},
			{
				flex: 0.1,
				field: 'totalPort',
				minWidth: 150,
				headerName: 'Total Port',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.totalPort}</Typography>
			},
			{
				flex: 0.15,
				field: 'tubeFoColor',
				minWidth: 150,
				headerName: 'Tube FO Color',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.tubeFoColor}</Typography>
			},
			{
				flex: 0.15,
				field: 'poleNumber',
				minWidth: 150,
				headerName: 'Pole Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.poleNumber}</Typography>
			},
			{
				flex: 0.15,
				field: 'photo',
				minWidth: 150,
				headerName: 'Photo',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.photo}</Typography>
			},
			{
				flex: 0.2,
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
						{/* <ShowODP />
						<EditODP /> */}
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
				urlActive='/odp' // Ubah ini sesuai dengan URL yang tepat
				url2='ODP'
				title='Manage ODP'
				subtitle='List ODP'
				// add={
				// 	<CreateODP />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data ODP yang diperoleh dari server
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

export default OdpPage
