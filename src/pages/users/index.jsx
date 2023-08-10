import {
	Box,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Dialog,
	DialogTitle,
	Button,
	MenuItem,
	Typography,
	DialogContent,
	IconButton,
	styled,
} from '@mui/material';

import CustomTextField from '@components/mui/text-field'
import Icon from '@components/icon'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import {
	fetchCompanies,
	addCompany,
	updateCompany,
	deleteCompany,
	fetchCompanyById
} from '@slices/company/Actions';
import { setCompanies } from '@slices/company/Slice'
import { toast } from 'react-hot-toast'
import useAuthStore from '@zustand/authSlice';
import ListUser from './list';
import CreateUser from './add'
import CustomBreadcrumb from '@mycomponents/Breadcrumb'
import SearchInput from '@mycomponents/SearchInput'
import PageHeader from '@app/components/page-header';

const UsersPage = () => {
	const [searchValue, setSearch] = useState('');

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<CustomBreadcrumb
						urlActive='/users'
						url2='Users'
					// url3='Create'
					/>
					<Typography variant='h2' sx={{
						textAlign: 'center', alignItems: 'center',
						pb: theme => [`${theme.spacing(4)} !important`, `${theme.spacing(4)} !important`]
					}}>
						<strong>Manage Users</strong>
					</Typography>
					{/* <h1 className='title' sx={{
					// textAlign: 'center',
					pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`]
				}}>Manage Users</h1> */}
					<Card>
						{/* <CardHeader title='List Of Users :' /> */}
						<Typography variant='h5' sx={{
							ml: 6,
							py: theme => [`${theme.spacing(4)} !important`, `${theme.spacing(4)} !important`]
						}}>
							<strong>List Of Users :</strong>
						</Typography>
						<Divider sx={{ mt: '0 !important' }} />
						<Box
							sx={{
								p: 5,
								pb: 3,
								width: '100%',
								display: 'flex',
								flexWrap: 'wrap',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								{/* <CustomTextField select defaultValue='Actions' >
									<MenuItem value='Actions'>Selected</MenuItem>
									<MenuItem value='Delete'>Delete</MenuItem>
									<MenuItem value='Edit'>Edit</MenuItem>
								</CustomTextField> */}
								{/* <CustomTextField
									placeholder='Search ...'
									sx={{ mr: 4, mb: 2 }}
								/> */}
								<SearchInput
									name='keyword'
									query={searchValue}
									onChange={(e) => setSearch(e.target.value)}
								// sx={{ mr: 4, mb: 2 }}
								/>
							</Box>
							<Box>
								<CreateUser />
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						{/* <CardContent> */}
						<ListUser />
						{/* </CardContent> */}
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default UsersPage