
import { useState, useEffect, useMemo } from 'react'
import CPage from "@mycomponents/Reusable/CPage";
import CTable from "@mycomponents/Tabel/Basic";
import {
	Box,
	Typography,
} from '@mui/material';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import CreateCompanies from './create';
import ShowCompanies from './show'
import EditCompanies from './edit'
import {
	fetchCompanies,
	addCompany,
	updateCompany,
	deleteCompany,
	fetchCompanyById
} from '@slices/company/Actions';
import { setCompanies } from '@slices/company/Slice'

const Companies = () => {
	const dispatch = useDispatch()
	const { companies } = useSelector((state) => state.companies);

	const [rowId, setRowId] = useState(null);
	const [size, setSize] = useState(7)
	const [page, setPage] = useState(0)

	useEffect(() => {
		dispatch(fetchCompanies());
	}, []);

	const defaultColumns = useMemo(
		() => [
			{
				flex: 0.25,
				field: '_id',
				minWidth: 100,
				headerName: 'ID',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row._id}</Typography>
			},
			{
				flex: 0.25,
				field: 'name',
				minWidth: 150,
				headerName: 'Company Name',
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
			},
			{
				field: 'email', headerName: 'Email', minWidth: 200,
				renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.email}</Typography>
			},
			{ field: 'phone', headerName: 'Phone', width: 150, valueGetter: (params) => params.row.contact?.phone || '-' },
			// {
			// 	field: 'role',
			// 	headerName: 'Role',
			// 	minWidth: 100,
			// 	type: 'singleSelect',
			// 	valueOptions: ['owner', 'company', 'admin'],
			// 	editable: true,
			// 	renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.role}</Typography>
			// },
			{
				field: 'active',
				headerName: 'Active',
				width: 100,
				type: 'boolean',
				editable: true,
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
				headerName: 'Established Since',
				renderCell: (params) =>
					<Typography sx={{ color: 'text.secondary' }}>{moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Typography>
			},
			{
				flex: 0.25,
				minWidth: 120,
				sortable: false,
				field: 'actions',
				headerName: 'Actions',
				renderCell: ({ row }) => (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<ShowCompanies />
						<EditCompanies />
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
				urlActive='/companies'
				url2='Companies'
				title='Manage Companies'
				subtitle='List Companies'
				add={
					<CreateCompanies />
				}
				tabel={
					<CTable
						columns={columns}
						rows={companies}
						size={size}
						// rowsPerPageOptions={[7, 10, 25, 50, 100]}
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

export default Companies;