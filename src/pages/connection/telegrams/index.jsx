import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
// import CreateTelegram from './create';
// import ShowTelegram from './show';
// import EditTelegram from './edit';
import moment from 'moment';

const TelegramPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.2,
				field: 'token',
				minWidth: 150,
				headerName: 'Token',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.token}</Typography>
			},
			{
				flex: 0.15,
				field: 'usernameBot',
				minWidth: 150,
				headerName: 'Bot Username',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.usernameBot}</Typography>
			},
			{
				flex: 0.15,
				field: 'usernameOwner',
				minWidth: 150,
				headerName: 'Owner Username',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.usernameOwner}</Typography>
			},
			{
				flex: 0.15,
				field: 'telegramOwnerId',
				minWidth: 150,
				headerName: 'Owner ID',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.telegramOwnerId}</Typography>
			},
			{
				flex: 0.15,
				field: 'telegramGroupId',
				minWidth: 150,
				headerName: 'Group ID',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.telegramGroupId}</Typography>
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
						{/* <ShowTelegram />
						<EditTelegram /> */}
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
				urlActive='/telegram' // Ubah ini sesuai dengan URL yang tepat
				url2='Telegram'
				title='Manage Telegram'
				subtitle='List Telegram'
				// add={
				// 	<CreateTelegram />
				// }
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Telegram yang diperoleh dari server
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

export default TelegramPage;