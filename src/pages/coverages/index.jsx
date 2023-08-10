import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
// import CreateCoverage from './create';
// import ShowCoverage from './show';
// import EditCoverage from './edit';

const CoveragePage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.25,
				field: 'areaName',
				minWidth: 150,
				headerName: 'Area Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.areaName}</Typography>
			},
			{
				flex: 0.25,
				field: 'address',
				minWidth: 200,
				headerName: 'Address',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.address}</Typography>
			},
			{
				flex: 0.25,
				field: 'description',
				minWidth: 150,
				headerName: 'Description',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.description}</Typography>
			},
			{
				flex: 0.25,
				field: 'status',
				minWidth: 150,
				headerName: 'Status',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
			},
			{
				flex: 0.25,
				field: 'radius',
				minWidth: 150,
				headerName: 'Radius',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.radius}</Typography>
			},
			{
				flex: 0.25,
				field: 'codeArea',
				minWidth: 150,
				headerName: 'Area Code',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.codeArea}</Typography>
			},
			{
				flex: 0.25,
				field: 'publisher',
				minWidth: 150,
				headerName: 'Publisher',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.publisher}</Typography>
			},
		],
		[rowId]
	);


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
						{/* <ShowCoverage />
						<EditCoverage /> */}
						{/* <DialogDelete
							onDelete={() => handleDelete(row._id)}
							data={row}
						/> */}
					</Box>
				)
			}
		]
	);

	return (
		<>
			<CPage
				urlActive='/coverage' // Ubah ini sesuai dengan URL yang tepat
				url2='Coverage'
				title='Manage Coverage'
				subtitle='List Coverage'
				// add={
				// 	<CreateCoverage />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data coverage yang diperoleh dari server
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

export default CoveragePage;