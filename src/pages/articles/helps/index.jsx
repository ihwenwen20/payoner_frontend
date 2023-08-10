import React, { useState, useEffect, useMemo } from 'react';
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import CreateHelpCenterCategory from './create';
import ShowHelpCenterCategory from './show';
import EditHelpCenterCategory from './edit';
import moment from 'moment';

const HelpCenterPage = () => {

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
				field: 'avatarColor',
				minWidth: 150,
				headerName: 'Avatar Color',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.avatarColor}</Typography>
			},
			{
				flex: 0.35,
				field: 'subCategories', // Ganti ini dengan field yang tepat untuk menampilkan subcategories
				minWidth: 300,
				headerName: 'Subcategories',
				renderCell: ({ row }) => (
					<Typography sx={{ color: 'text.secondary' }}>
						{row.subCategories.map((subCategory, index) => (
							<div key={index}>
								<strong>Title: </strong>{subCategory.title}<br />
								<strong>Icon: </strong>{subCategory.icon}<br />
								{/* Render articles inside subCategory */}
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
			// ... other columns
		],
		[rowId]
	);

	// ... Your other code

	return (
		<>
			<CPage
				urlActive='/help' // Ubah ini sesuai dengan URL yang tepat
				url2='Help Center'
				title='Manage Help Center'
				subtitle='List Categories'
				add={
					<CreateHelpCenterCategory />
				}
				tabel={
					<CTable
						columns={columns}
						// rows={[]} // Isi ini dengan data Help Center Categories yang diperoleh dari server
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

export default HelpCenterPage;
