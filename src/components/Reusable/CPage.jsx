import {
	Box,
	Grid,
	Card,
	Typography,
	Divider,
} from '@mui/material';
import CustomBreadcrumb from '@mycomponents/Breadcrumb'
import SearchInput from '@mycomponents/SearchInput'

const CPage = (props) => {
	const { urlActive, url2, url3, title, subtitle, add, name, disabled, query, onChange, tabel,
	} = props

	return (
		<>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<CustomBreadcrumb
						urlActive={urlActive}
						url2={url2}
						url3={url3}
					/>
					<Typography variant='h3' sx={{
						textAlign: 'center', alignItems: 'center',
						pb: theme => [`${theme.spacing(4)} !important`, `${theme.spacing(4)} !important`]
					}}>
						<strong>{title}</strong>
					</Typography>
					<Card>
						<Typography variant='h5' sx={{
							ml: 6,
							py: theme => [`${theme.spacing(4)} !important`, `${theme.spacing(4)} !important`]
						}}>
							<strong>{subtitle}</strong>
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
								<SearchInput
									name={name}
									disabled={disabled}
									value={query}
									onChange={onChange}
								/>
							</Box>
							<Box>
								{add}
							</Box>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						{tabel}
					</Card>
				</Grid>
			</Grid >
		</>
	)
}

export default CPage