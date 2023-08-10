import { useState, useEffect, useMemo } from 'react'
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchBanks,
} from '@slices/category/Actions';
import CreateBanks from './create';
import ShowBanks from './show'
import EditBanks from './edit'

const BanksPage = () => {
	const dispatch = useDispatch()
	// const { banks } = useSelector((state) => state.banks);

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7)
	const [page, setPage] = useState(0)

	// useEffect(() => {
	// 	dispatch(fetchBanks());
	// }, []);

	const defaultColumns = useMemo(
		() => [
			// {
			// 	flex: 0.25,
			// 	field: '_id',
			// 	minWidth: 100,
			// 	headerName: 'ID',
			// 	renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row._id}</Typography>
			// },
			{
				flex: 0.25,
				field: 'bankName',
				minWidth: 150,
				headerName: 'Bank Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.bankName}</Typography>
			},
			{
				flex: 0.25,
				field: 'noRekening',
				minWidth: 150,
				headerName: 'Rekening Number',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.noRekening}</Typography>
			},
			{
				flex: 0.25,
				field: 'ownerName',
				minWidth: 150,
				headerName: 'Owner Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.ownerName}</Typography>
			},

		],
		[rowId])

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
						<ShowBanks />
						<EditBanks />
						{/* <DialogDelete
							onDelete={() => handleDelete(row._id)}
							data={row}
						/> */}
					</Box>
				)
			}
		])

	return (
		<>
			<CPage
				urlActive='/banks'
				url2='Banks'
				title='Manage Banks'
				subtitle='List Banks'
				add={
					<CreateBanks />
				}
				tabel={
					<CTable
						columns={columns}
						// rows={[]}
						size={size}
						setSize={setSize}
						setPage={setPage}
						page={page}
						onCellEditCommit={(params) => setRowId(params.id)}
					/>
				}
			/>
		</>
	)
}

export default BanksPage;