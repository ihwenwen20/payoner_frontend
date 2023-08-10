import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import CreateFaq from './create';
import ShowFaq from './show';
import EditFaq from './edit';
import moment from 'moment';

const FaqPage = () => {

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7);
	const [page, setPage] = useState(0);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.2,
				field: 'icon',
				minWidth: 150,
				headerName: 'Icon',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.icon}</Typography>
			},
			{
				flex: 0.2,
				field: 'title',
				minWidth: 150,
				headerName: 'Title',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.title}</Typography>
			},
			{
				flex: 0.2,
				field: 'subtitle',
				minWidth: 150,
				headerName: 'Subtitle',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.subtitle}</Typography>
			},
			{
				flex: 0.35,
				field: 'qandA', // Ganti ini dengan field yang tepat untuk menampilkan pertanyaan dan jawaban
				minWidth: 300,
				headerName: 'Q&A',
				renderCell: ({ row }) => (
					<Typography sx={{ color: 'text.secondary' }}>
						{row.qandA.map((qAndA, index) => (
							<div key={index}>
								<strong>Question: </strong>{qAndA.question}<br />
								<strong>Answer: </strong>{qAndA.answer}<br />
							</div>
						))}
					</Typography>
				)
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
						<ShowFaq />
						<EditFaq />
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
				urlActive='/faq' // Ubah ini sesuai dengan URL yang tepat
				url2='FAQ'
				title='Manage FAQs'
				subtitle='List FAQs'
				add={
					<CreateFaq />
				}
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data FAQs yang diperoleh dari server
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

export default FaqPage;